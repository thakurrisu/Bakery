import React from "react";
import {useForm} from "react-hook-form"
import './Order.css'

const Order = () => {
  const {register,handleSubmit} = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="product" {...register("product")}/>
      <input type="submit"/>
    </form>
   
  )
}

export default Order
