import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';



function AddProducts() {
	const {user} = useContext(AuthContext)
	const { register, handleSubmit } = useForm();
	

	const handleAddSubmit = data =>{		
		const AddProduct ={
			name: data.ProductName,
			location: data.location,
			resalePrice: data.resellPrice,
			sellerName: data.SellerName,
			productsUsdTime: data.usedTime,
			catagoryId: data.catagoryId,
			productsCatagory: data.productsCatagory,
			marketPrice: data.marketPrice,
			condisonType: data.condisonType,
			sellerEmail: user?.email,
			description: data.description,
			img: data.img, 
			postDate: new Date()
		}
		fetch('https://y-gules-mu.vercel.app/addProducts',{
			method: 'POST',
			headers:{
				'content-type' : 'application/json'
			},
			body: JSON.stringify(AddProduct)			
		})
		.then(res => res.json())
		.then(data =>{
			if(data.acknowledged){
				toast.success('Products add Successfully')
			   }
			   register('')
		})
	}
	
  return (
    <div>
      <section className="p-6 w-3/4 mx-auto mt-12 bg-gray-800 text-gray-50">
	<form onSubmit={handleSubmit(handleAddSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Add Your used Products</p>
				<p className="text-xs">please implement all requirements and your products details and flow our terms and condition.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Market Price</label>
					<input {...register("marketPrice")} name='marketPrice' 
					id="marketprice" type="text" placeholder="Market Price"
					className="w-full rounded-md focus:ring focus:ring-opacity-75
					 focus:ring-violet-400 border-gray-700 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Resell Price</label>
					<input {...register("resellPrice")} name='resellPrice'
					id="resellPrice" type="text" placeholder="Resell Price"
					className="w-full rounded-md focus:ring focus:ring-opacity-75
					 focus:ring-violet-400 border-gray-700 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Condison Type</label>
					<input {...register("condisonType")} name='condisonType' 
					id="condisonType" type="text" placeholder="" 
					className="w-full rounded-md focus:ring focus:ring-opacity-75
					 focus:ring-violet-400 border-gray-700 text-gray-900" required/>
				</div>
				<div className="col-span-full">
					<label className="text-sm">Location</label>
					<input {...register("location")} name='location' id="location"
					 type="text" placeholder="" className="w-full rounded-md focus:ring 
					 focus:ring-opacity-75 focus:ring-violet-400 border-gray-700
					  text-gray-900" required/>
				</div>
				<div className="col-span-full">
					<label className="text-sm">Img URL</label>
					<input {...register("img")} name='img' id="location"
					 type="text" placeholder="" className="w-full rounded-md focus:ring 
					 focus:ring-opacity-75 focus:ring-violet-400 border-gray-700
					  text-gray-900" required/>
				</div>
				<div className="col-span-full">
					<label className="text-sm">Seller name</label>
					<input {...register("SellerName")} name='SellerName' id="location" 
					type="text" placeholder="" className="w-full rounded-md focus:ring 
					focus:ring-opacity-75 focus:ring-violet-400 border-gray-700
					 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Brand Name</label>
					<input {...register("brandName")} name='brandName' id="brandName" 
					type="text" placeholder="" className="w-full rounded-md focus:ring 
					focus:ring-opacity-75 focus:ring-violet-400 border-gray-700
					 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Catagory.</label>
					<input {...register("productsCatagory")} name='productsCatagory' id="brandName" 
					type="text" placeholder="productsCatagory" className="w-full rounded-md focus:ring 
					focus:ring-opacity-75 focus:ring-violet-400 border-gray-700
					 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">Product Name</label>
					<input {...register("ProductName")}  name='ProductName' id="brandName" 
					type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75
					 focus:ring-violet-400 border-gray-700 text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">Used Time</label>
					<input {...register("usedTime")} name='usedTime' id="usedTime" type="text"
					 className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400
					  border-gray-700 text-gray-900" required />
				</div>
				<div className='text-black'>
				<select {...register("catagoryId")} required>
				<option value="01">Sports Bike</option>
				<option value="02">Electic Bike</option>
				<option value="03">Childrean Bike</option>
				</select>
				</div>
				<div className="col-span-full ">
					<label  className="text-sm">Drescription</label>
					<input  {...register("description")} id="description" type="text" placeholder=""
					className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400
					 border-gray-700 text-gray-900" required/>
				</div>		
			</div>		
		</fieldset>
		<input className='w-2/3 mx-auto rounded-md font-semibold p-2 bg-gray-900 text-white' type="submit" value="Submit" />
	</form>
</section>

    </div>
  )
}

export default AddProducts