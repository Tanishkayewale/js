<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name= "viewport" content="width=device- width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #container{
            display: flex;
            justify-content: space-around;
        }
        #c{
            height: 500px;
            width: 300px;
            border: 1px solid;
        }
    </style>
</head>
<body>
    <h1>Product list</h1>
    <button onclick="getproduct()">Show products"</button>
    <div> id= "container"</div>

    <script>
        let card=doctument.getElementById("container");

        let products=[{
            pname: "watch",
            cname:"titan",
            price:4000,
            img:""
        },{
            pname:"mobile",
            cname:"samsung",
            price:50000,
            img:""
        },{
             pname: "headphone",
            cname:"noise",
            price:3000,
            img:""
        },{
             pname: "laptop",
            cname:"aser",
            price:40000,
            img:""
        }]

        function getProduct() {
            products.forEach((val)=>{

                Clipboard.innerHtml+=<div id"c"> <img src=$(val.img) alt= "">
                                        <h2>Product name:$(val.pname)</h2>
                                        <h3>Company name:$(val.cname)</h3>
                                        <h4>price:${val.price}</h4></div>
            })
            
        }
    </script>

</body>

