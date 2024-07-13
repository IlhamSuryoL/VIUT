# Product 
```javascript
product 
[{
  id: xx
  product_name: "",
  product_description: "",
  product_image_url:"",
  create_at:"",
  participant_ids:[]
  users: [
     {
      id:"",
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
[
  {
    name: "",
    email: "",
    nps_score: 0,
    viat_score: 0,
    products:[
{
  id: xx
  product_name: "",
  product_description: "",
  product_image_url:"",
  viatQuestions:[
        {
          text: "",
          score:""
        }
      ]
     }
    ]
  }
]
```
# Question
```javascript
viatQuestion:
[

]
```