import { create } from "zustand";
import { productsCollectionRef } from "../products-store/products-store";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../utils/firebase/firebase-config";
import { toast } from "react-toastify";

export const productDetails = create((set) => ({
  product: JSON.parse(localStorage.getItem("selectedProduct")) || null,
  isFetch: false,
  isFetchAddOrder: false,
  selectedProduct: null,

  getDefineProduct: async (id) => {
    try {
      set({ isFetch: true });
      const defineProductsRef = doc(productsCollectionRef, id);
      const productSnap = await getDoc(defineProductsRef);
      set({ product: { id: productSnap.id, ...productSnap.data() } });
    } catch (error) {
      console.log("error", error);
    } finally {
      set({ isFetch: false });
    }
  },

  setSelectedProduct: (product) => {
    set({ selectedProduct: product });
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  },
  addProductInOrders: async (productData) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if(!user)return;
  
    const userDocRef = doc(db,'users', user.uid)
    const userSnap = await getDoc(userDocRef)

    const userInfo = userSnap.exists() ? userSnap.data().userInfo : null;

    if (!userInfo){
      toast('заполните форму в профиле перед оформлением заказа')
      return;
    }

    set({isFetchAddOrder: true});

    const now = new Date()
    const formattedDate = now.toLocaleDateString('ru-RU',{
      day:'2-digit',
      month:'2-digit',
      year:'2-digit'
    })
    try {
      await updateDoc(userDocRef, {
        orders: arrayUnion({
          productData:Array.isArray(productData) ? productData : [productData],
          date:`${formattedDate}`,
          userInfo,
        })
      })      
    } catch (error) {
      toast('Ошибка при добавлении заказа',error)
    } finally{
      set({isFetchAddOrder: false})
    }
  }
}));
