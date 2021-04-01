const { response } = require('express');
var express = require('express');
var app = express();

var dresses = [
    {
        color: '.black',
        srcs: [
            '0fda2315-92f1-48d5-8954-4a78d60a0b881529045573115-NA-4921529045572949-1.webp',
            '1b9df8fd-214e-4e8c-a0b6-759a9167e1e61564379559418-SASSAFRAS-Women-Black-A-Line-Dress-291564379558115-1.webp',
            '77e1b62b-c34c-4cff-a68e-f3de1c1a886a1573108038526-SASSAFRAS-Women-Black-Solid-Trench-Dress-6681573108036504-1.webp',
            '7584b116-2a2c-4fb1-881c-af58cc484b181532944603854-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-4791532944603727-1.webp',
            '799d3b54-c899-432e-9e88-51a1b9fd7c251605182750693TopsDOROTHYPERKINSWomenSweatersDOROTHYPERKINSWomenTrousersDO1.webp',
            'a373d08e-a2fb-4cbf-9a19-dd9679ea0c181573032453223-Libas-Women-Dresses-7681573032451400-1.webp',
            'ba144278-7866-4580-aebb-de0871cf1ff81596015771364TrousersDOROTHYPERKINSWomenShortsDOROTHYPERKINSWomenSkirtsDO1.webp',
            'db52fd6a-19fc-4add-bc4b-77b8608454d01562138455279-Veni-Vidi-Vici-Women-Black-Bodycon-Dress-3841562138453419-1.webp',
            'e36d964f-da74-4c07-acd4-b5cb81d6ee021525933565797-na-9581525933565562-1.webp',
            'f0172470-408a-4b8b-a1e5-045bd98a5f8b1572938035104-SASSAFRAS-Women-Dresses-9581572938032856-1.webp',
            '0fda2315-92f1-48d5-8954-4a78d60a0b881529045573115-NA-4921529045572949-1.webp'
        ]
    },
    {
        color: '.blue',
        srcs: [
            "027bc8c5-c343-49d4-bdc6-bb9687ef03ab1560139075957-1.webp",
            "97c78e8e-f54c-4c5b-907d-beaa593d703d1610984851907-1.webp",
            "79b44638-5cca-44b1-b858-91cf369310e11564380201363-SASSAFRAS-Women-Blue-A-Line-Dress-9861564380199640-2.webp",
            "82fda2cb-f2bf-4366-b317-2fe5fa791f0c1596018921836KSUTfuchsiaabstractprintedflaredfulllengthplacketkurtawithro5.webp",
            "915f4c83-8c94-4ca1-8eec-deec739e59aa1546950694702-1.webp",
            "97c78e8e-f54c-4c5b-907d-beaa593d703d1610984851907-1.webp",
            "027bc8c5-c343-49d4-bdc6-bb9687ef03ab1560139075957-1.webp"

        ]
    },
    {
        color: '.yellow',
        srcs: [
            "31deefd9-f530-4e95-a192-31349a1f1aab1589798213486VishudhWomenYellowPrintedMaxiDress1.webp",
            "429f0cb0-d15e-4502-b8d3-044a413c99a91582703299406-SASSAFRAS-Women-White-Self-Design-Wrap-Dress-864158270329790-1.webp",
            "60f032a5-4501-445a-8f02-f021304e1a531612337712385-Mast--Harbour-Women-Yellow-Printed-Fit-and-Flare-Dress-35816-1.webp",
            "186de9ed-930d-44ea-bfc3-eade945a45cb1601972381466-plusS-Women-Dresses-2041601972379069-1.webp"
        ]
    },
    {
        color: '.green',
        srcs: [
            "45359a1c-5240-4837-8878-05f7f3feee4d1580197901836-SASSAFRAS-Women-Green-Solid-A-Line-Dress-9491580197899621-1.webp"
        ]
    },
    {
        color: '.pink',
        srcs: [
            "32ec15d3-2067-48ab-a954-69f29b8710411612431436798-Mast--Harbour-Women-Pink-Printed-A-Line-Dress-45616124314353-1.webp",
            "4b4374d2-0067-40c3-bc30-7a6f2d228df71564401122087-SASSAFRAS-Women-Pink-Maxi-Dress-4111564401120260-1.webp",
            "752a04e2-1093-4243-9fcd-64c9346486bf1564401142308-SASSAFRAS-Women-Pink-Shirt-Dress-6811564401140400-1.webp",
            "752a04e2-1093-4243-9fcd-64c9346486bf1564401142308-SASSAFRAS-Women-Pink-Shirt-Dress-6811564401140400-1.webp"
        ]
    },
    {
        color: '.red',
        srcs: [

            "8e31363f-8ac5-4669-9aa8-114d502d7be61580207577109-SASSAFRAS-Women-Maroon-Solid-Tiered-Maxi-Dress-3781580207574-1.webp",

            "d696c0aa-1607-453d-88a3-549edf0ccb2c1575325176261-1.webp",

            "de5a1e02-d817-40f3-8db9-695befc46c2f1576473716354-UF-Women-Maroon-Printed-Maxi-Dress-7821576473714711-1.webp"
        ]
    }
]

app.use(express.static('./'));
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get("/test", function (request, response) {
    response.send({
        name: "Gora"
    })
})

app.get("/menItems", function (request, response) {
    setTimeout(function (params) {
        response.send(
            [
                'T-shirt',
                'Jeans',
                'Shoes',
                'Shirts',
                'Blazer'
            ]
        )
    }, 2000);
})

app.get("/womenItems", function (request, response) {
    setTimeout(function (params) {
        response.send(
            [
                'T-shirt',
                'Tops',
                'Pants',
                'Heals'
            ]
        )
    }, 2000);
})

app.post("/dressesImage", function (request, response) {
    console.log(request.body);
    var requestedColors = request.body.colors;
    var dressesFileNames = [];
    setTimeout(function (params) {
        for (var j = 0; j < requestedColors.length; j++) {
            var currentRequestedColor = requestedColors[j];
            for (var i = 0; i < dresses.length; i++) {

                var temporary = dresses[i];
                //console.log(temporary);
                var currentTemp = ""+ currentRequestedColor;
                //console.log(currentTemp);
                if (temporary.color === currentRequestedColor) {
                    //console.log(temporary.srcs);
                    for(var Z=0; Z<temporary.srcs.length; Z++) {
                     dressesFileNames.push(temporary.srcs[Z]);
                    }
                }

            }
        }
        console.log(dressesFileNames);
        response.send(
            dressesFileNames
        );
    })
})

app.listen(8080, function (request, response) {
    console.log("Server started at 8080");
})