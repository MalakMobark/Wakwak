// products-data.js (ملف بيانات المنتجات)

const ALL_PRODUCTS = [
    {
        id: 1, // هذا هو ID الكنزة الهودي الأولى
        category: "all_clothes",
        category: "man",
        name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        // يمكنك الاحتفاظ بـ 'image' كصورة افتراضية للمنتجات المعروضة في الكروت
        image: "img/hoodie-baby-blue1.jpg", 
        colors: [
            {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
             {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
             {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
           
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],
    },
    {
        id: 2, // هذا هو ID البنطلون
        category: "all_clothes",
        category: "man",
       name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        image: "img/hoodie-moss-green1.jpg", 
        colors: [
            {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
           {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
            {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],
    },
    {
        id: 3, // هذا هو ID الكنزة الهودي الثالثة
        category: "all_clothes",
        category: "man",
        name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        image: "img/hoodie-olive-green1.jpg", 
        colors: [
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
            {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
            {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],
    },
    {
        id: 4, // هذا هو ID الكنزة الهودي الرابعة
        category: "all_clothes",
        category: "man",
        name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        image: "img/hoodie-yallow1.jpg", 
        colors: [
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
           {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
            {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],
    },

    {
    id: 5, // هذا هو ID الكنزة الهودي الأولى
    category: "all_clothes",
        category: "man",
        name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        image: "img/hoodie-black1.jpg", 
        colors: [
            {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },

           {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
            {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],
},
{
    id: 6, // هذا هو ID البنطلون
    category: "all_clothes",
        category: "man",
        name: "كنزة هودي",
        description: "هودي شتوي قطن فليس مصووف قماش تركي بتصميم انيق يناسب الشباب والفتيات ",
        descriptionlonge: "uhhh",
        price: 239000 ,
        image: "img/hoodi-white1.jpg", 
        colors: [
            {
                name: "ابيض",
                hex: "white", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodi-white1.jpg",            
                    "img/hoodi-white2.jpg",      
                    "img/hoodi-white3.jpg",    
                    "img/hoodi-white4.jpg", 
                ]
            },
           {
                name: "بيبي بلو",
                hex: "#89CFF0", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-baby-blue1.jpg",            
                    "img/hoodie-baby-blue2.jpg",      
                    "img/hoodie-baby-blue3.jpg",    
                    "img/hoodie-baby-blue4.jpg", 
                    "img/hoodie-baby-blue5.jpg", 
                    "img/hoodie-baby-blue6.jpg", 
                ]
            },
            {
                name: "عفني",
                hex: "#8FBC8F", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-moss-green1.jpg",            
                    "img/hoodie-moss-green2.jpg",      
                    "img/hoodie-moss-green3.jpg",    
                    "img/hoodie-moss-green4.jpg", 
                    "img/hoodie-moss-green5.jpg", 
                ]
            },
            {
                name: "زيتي",
                hex: "#6B8E23", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-olive-green1.jpg",            
                    "img/hoodie-olive-green2.jpg",      
                    "img/hoodie-olive-green3.jpg",    
                ]
            },
            {
                name: "اصفر",
                hex: "#FFFF00", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-yallow1.jpg",            
                    "img/hoodie-yallow2.jpg",      
                    "img/hoodie-yallow3.jpg",    
                ]
            },
            {
                name: "اسود",
                hex: "black", 
                // **التعديل الهام هنا:** مصفوفة صور لنفس اللون
                images: [
                    "img/hoodie-black1.jpg",            
                    "img/hoodie-black2.jpg",      
                    "img/hoodie-black3.jpg",    
                    "img/hoodie-black4.jpg", 
                    "img/hoodie-black5.jpg", 
                    "img/hoodie-black6.jpg", 
                ]
            },
        ],
        technicalDetails: [
            { name: "طول الكنزة", value: "60 cm" },
            { name: "طول الكم", value: "50 cm" },
            { name: "نوعية القماش", value: "قطن تركي (100%)" },
            { name: "عرض الصدر", value: "40 cm" }
        ],

},

];