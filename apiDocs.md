# Product 
```javascript
products 
[{
  uid: xx
  product_name: "",
  product_description: "",
  product_image_url:"",
  create_at:"",
  update_at:"",
  participant_ids:[]
  users: [
     {
      uid:"",
      name: "",
      email: "",
      nps_score: 0,
      viat_score: 0,
      questions:[
        {
          text: "",
          score:""
        }
      ]
     }
  ]
}]
```

# User
```javascript
users :
{
    name: "",
    email: "",
    uid: xx
}
```
# Question
```javascript
viatQuestion:
[

]
```

# Tabel relasi

```javascript
users :{
  uid:"",
  name:"",
  email:"",
  password:""
}

products: {
  id: xx
  product_name: "",
  product_description: "",
  product_image_url:"",
  create_at:"",
  update_at:""
}
questions:{
  id:""
  text:""
}
// n to n antara tabel users dan products
users_product :{
  id:"",
  user_id:""
  product_id:"" ,
  nps_score: 0,
  viat_score: 0,
}

// n to n antara tabel questions dan users_product 
product_survey:{
id:""
skor:"",
questions_id:"",
user_product_id:""
}
```