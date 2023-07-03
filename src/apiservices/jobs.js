import { axios } from "../http"

export const getrecommendjobs = async({
    type,
        pageNumber,
        pageSize,
        myskill,
})=>{

    if(type === "saved"){
        return await axios.get(`/user/wishlist`)
    }
    else{
            return await axios.post(`/job/getjobposts?jobtype=${type}`, {
                type,
                pageNumber,
                pageSize,
                myskill,
            })
    }
}

export const removeWishlistFn = async(id)=>{
            return await axios.post(`/user/removewishlist`, {
                wishlistid: id
              })
}

