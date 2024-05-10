var arr = [
    { name: "Flower", image: "https://images.unsplash.com/photo-1714671739362-e6fcee8d8704?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" },
    { name: "travel", image: "https://images.unsplash.com/photo-1517999349371-c43520457b23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" },
    { name: "RadheKrishna", image: "https://media.istockphoto.com/id/1054775834/photo/lord-krishna-with-radha.jpg?s=612x612&w=0&k=20&c=0Yq8I4HYxy4q9zoN-m0eqhuCVUgX1EJ3dg1mxJXZjcE=" },
    { name: "Shiv", image: "https://media.istockphoto.com/id/1317752940/photo/statue-of-meditating-hindu-god-shiva-on-the-ganges-river-at-rishikesh-village-in-india.jpg?s=612x612&w=0&k=20&c=ZrC0p4iRy1J3JNAX0frELkyhQaFF0WR9dxb_t9gbrDo=" },
    { name: "Ganpati", image: "https://images.unsplash.com/photo-1567878673047-0451c851056e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Book", image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29kfGVufDB8fDB8fHww" },
    { name: "Holi", image: "https://images.unsplash.com/photo-1551757891-24a8dabd2708?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cristmas ", image: "https://images.unsplash.com/photo-1636750406436-9d877d5691a2?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D " },
    { name: "Diwali", image: "https://media.istockphoto.com/id/857667222/photo/happy-diwali-greeting-card-design-using-beautiful-clay-diya-lamps-lit-on-diwali-night.jpg?s=612x612&w=is&k=20&c=vGDcbRPJWpDp0TgQJVCtWIqYQp_qw_OHy5d5bah-TWE=" },
    { name: "Eid", image: "https://media.istockphoto.com/id/1471855090/photo/happy-ramadan-happy-eid-islamic-design-islamic-moon-islamic-greeting-and-ramadan-kareem.jpg?s=612x612&w=is&k=20&c=aLARgJSZFhoaWtkA4MGHIQmdpQvXEyEXFPEYaZAv6PQ=" },
    { name: "Nature", image: "https://media.istockphoto.com/id/524174750/photo/thailand-jungle.jpg?s=612x612&w=is&k=20&c=Uv9v0sRM1kbHFFrCDtudGF4sx7QZKVaCROh0TU6JOK4=" },
    { name: "Lotus", image: "https://media.istockphoto.com/id/1335845017/photo/pink-blooming-lotus-close-up.jpg?s=612x612&w=is&k=20&c=6A17lXEyPP-I0OAsJrPvqMTrbjOEUZ28LvRv3TAesUU=" },
    { name: "Mountains", image: "https://media.istockphoto.com/id/2101588899/photo/53mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=-YA7AHAbtSOp8rIHGa_jOF4j09dwPVnmgUo6dyiuKdw=" },
    { name: "Waterfall", image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww" },
    { name: "Wallpaper", image: "https://media.istockphoto.com/id/1657376714/photo/a-child-holding-a-small-plant-in-their-hands-with-soil-background-of-red-soil-selective-auto.jpg?s=612x612&w=0&k=20&c=LrKnndkQ98chZUxuRbpFPNUs-z1KSInGmAN04r5965M=" },
    { name: "beauty", image: "https://media.istockphoto.com/id/1755697786/photo/woman-photographing-tibetan-prayer-flags.jpg?s=612x612&w=0&k=20&c=QkUhtQZ2ApdTDTckl3ZSPLbpaCQHN7vs8_k2EO3RDnI=" },
    { name: "Life", image: "https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850=" },
    { name: "kashmir", image: "https://media.istockphoto.com/id/125143763/photo/tamil-pickers-plucking-tea-leaves-on-plantation.jpg?s=612x612&w=is&k=20&c=Kf1KKYvmU4JW-J-OFdFRdmpBU10HlVgONyLWIHXAiIE=" },
    { name: "birthday", image: "https://media.istockphoto.com/id/1201202312/photo/birthday-cake-with-happy-birthday-banner.jpg?s=612x612&w=0&k=20&c=DO7GQlaJaZQ5twtzR4zYlHnylqx1Ll1f_xvOkSWZhfc=" },
    { name: "happy new year", image: "https://media.istockphoto.com/id/1784098951/photo/happy-new-year-2024-festive-silvester-sylvester-new-years-eve-party-background-greeting-card.jpg?s=612x612&w=0&k=20&c=FLAPCEBus3b_SSBXbvOwgPq7QDiaZjvH63Xfztej2hA=" },
    {name:"Doll",image:"https://i.pinimg.com/236x/8a/38/87/8a38879f3655e131c08bffba7c8cb90b.jpg"},
    {name:"Doremon",image:"https://i.pinimg.com/236x/77/22/3f/77223f2536ed57fe37fa3587688f0cac.jpg"},
    {name:"shinchain",image:"https://i.pinimg.com/236x/ff/69/3d/ff693d4d868a1da7f41b25c9d2092ae1.jpg"},
    {name:"Art",image:"https://i.pinimg.com/236x/1e/5a/3c/1e5a3c62f0968928943ead339bd0eaf4.jpg"},
    {name:"cute",image:"https://i.pinimg.com/236x/f4/6d/7b/f46d7ba22b30dc5c5e1488da246cc69b.jpg"},
    {name:"pizza",image:"https://i.pinimg.com/236x/9d/93/9a/9d939ac2d6fd1386750627e0ac2f299a.jpg"},
    {name:"painting",image:"https://i.pinimg.com/236x/3c/0e/06/3c0e06920dd0d35128763ef0cc3403d7.jpg"},
    {name:"wallpaper",image:"https://in.pinterest.com/pin/2322237301131392/"},
    {name:"Spiderman",image:"https://i.pinimg.com/236x/b3/11/5a/b3115ae3e48ac976eb32b8e344604b74.jpg"},
    {name:"wallpaper",image:"https://i.pinimg.com/236x/33/64/88/33648858b98aac1f7882c54972ee7dff.jpg"},
    {name:"Doremon",image:"https://i.pinimg.com/236x/e7/30/9c/e7309cb51418a07a56bc358a80c4b7e8.jpg"},
    {name:"Dress",image:"https://i.pinimg.com/236x/5a/fc/dc/5afcdc2029ebe7f03e1cd40159f48bd1.jpg"},
    {name:"burger", image:"https://i.pinimg.com/474x/38/c2/51/38c251f4e4d1f469c12ea75b62228b14.jpg"},
    {name:"guitar" , image: "https://i.pinimg.com/236x/35/36/57/353657fd31e976f33236070d89d6960a.jpg"},
    {name: "Dog ", image: "https://i.pinimg.com/236x/f0/90/96/f090964ce4a57a75f8ab31d7fce29cae.jpg"},
    {name:"pasta" , image: "https://i.pinimg.com/474x/b2/f4/67/b2f4678ad2b4764480275b4bb220b211.jpg"},
    {name: "noddles", image: "https://i.pinimg.com/236x/c3/a1/ce/c3a1cef3ff5a8f9f41972f4858e07d8f.jpg"},
    {name: "coding", image :"https://i.pinimg.com/236x/89/59/36/895936e360cfaf001e615dfe99e4564e.jpg"},
    {name: "jewelery" , image: "https://i.pinimg.com/236x/53/a8/21/53a82126cb55c4af14341685b58cf32e.jpg"},
    {name: "jewlery" , image: "https://i.pinimg.com/236x/35/98/17/359817c2d48115c5d565fb4218435947.jpg"},
    {name: "jewelery" , image: "https://i.pinimg.com/474x/25/a0/91/25a091e918edfa2fc955761e6ce2eb05.jpg"},
    {name: "jewlery", image : "https://i.pinimg.com/236x/1c/35/5d/1c355dd438c963e97da3a009e87c0f05.jpg"},
    {name: "faishon" , image :"https://i.pinimg.com/236x/7b/08/a9/7b08a924fb1ed7b5e9fddffd602ff2db.jpg"},
    {name:"faishon", image:"https://i.pinimg.com/236x/38/15/8e/38158eceac466add5ea9ce03d3d6ddcb.jpg"},
    {name:"tasty" , image: "https://i.pinimg.com/236x/27/f3/ef/27f3efa4f87fd44e2b6ec5f7a8bc01c8.jpg"},
    {name:"qouets", image: "https://i.pinimg.com/236x/51/ed/e0/51ede0f0bd118f5b81a8e70221f87440.jpg"},
    {name:"quotes", image: "https://i.pinimg.com/236x/67/aa/ec/67aaec0d5da293ef41037f6e86005078.jpg"},
    {name:"qoutes", image: "https://i.pinimg.com/236x/ca/b6/21/cab62145dc2a08c26aab9d7a2df1e68f.jpg"},
    {name:"quotes", image: "https://i.pinimg.com/236x/f8/a6/e5/f8a6e530eff49fd9651859f6482bef2e.jpg"},
    {name:"quotes", image: "https://i.pinimg.com/236x/46/5b/29/465b2950d80429e6f274a9a72c549195.jpg"},
    {name:"mummy", image: "https://i.pinimg.com/236x/0a/c3/2e/0ac32e696a0d3a7a18c2ed22a2407084.jpg"},
    {name:"maa", image: "https://i.pinimg.com/236x/e0/35/bb/e035bbc9e64911aced564d7853e505ed.jpg"},
    {name:"maa", image: "https://i.pinimg.com/236x/b6/d7/29/b6d7290b250a464b1dca877aa77cadc7.jpg"},
    {name:"funny", image: "https://i.pinimg.com/474x/60/3c/a6/603ca62057a709b4fcdd8fd48250beaf.jpg"},
    {name:"funny", image: "https://i.pinimg.com/236x/c3/99/8f/c3998fb14f68e969f7710e12eb8a44e2.jpg"},
    {name:"funny", image: "https://i.pinimg.com/236x/71/6c/25/716c25773d820de46a85b96e5381cce8.jpg"},
    {name:"funny", image: "https://i.pinimg.com/236x/b9/1d/59/b91d59dfab1c6d3abc650548c7a7e8ea.jpg"},
    {name:"funny", image: "https://i.pinimg.com/236x/c0/83/d2/c083d280f573d84194cc192a0e11594a.jpg"},
    {name:"papa", image: "https://i.pinimg.com/236x/f2/ff/92/f2ff92e4a1bc2b1963ae530d49a5e0dd.jpg"},
    {name:"papa", image: "https://i.pinimg.com/564x/24/63/c1/2463c17bfe2188fdc3228a97489cd88e.jpg"},
    {name:"papa", image: "https://i.pinimg.com/236x/58/2b/b0/582bb00be65b68a1e104ef35f51acca9.jpg"},
    {name:"papa", image: "https://i.pinimg.com/236x/2e/f0/64/2ef0646cf613280c9c00e5693e2b8af1.jpg"},
{name:"frestivals", image:"https://i.pinimg.com/236x/25/9a/34/259a34b2cf20076c126f1719dc2302bd.jpg"},
{name:"frestival", image:"https://i.pinimg.com/236x/9a/00/c6/9a00c6ffce60de8cb238ef1e46929c7f.jpg"},
{name:"independenceday", image:"https://i.pinimg.com/236x/d5/e4/ab/d5e4abd25d502cbe7619f04d6fb964ca.jpg"},
{name:"republic day", image:"https://i.pinimg.com/474x/78/e7/d2/78e7d2c015a909087d65ab725e85a7bc.jpg"},
{name:"nation", image:"https://i.pinimg.com/236x/d2/80/70/d28070c8333d3db4827f52ee92b2ef3f.jpg"},
{name:"india", image:"https://i.pinimg.com/236x/6d/e5/9a/6de59adfe3abd81beb78160204737b7e.jpg"},
{name:"bharat", image:"https://i.pinimg.com/236x/2c/85/3f/2c853f2e70b479d9937c831decec7b36.jpg"},
{name:"india", image:"https://i.pinimg.com/236x/2d/b2/7f/2db27f434e3b5f0bdc32d01ba4e1a799.jpg"},
{name:"india", image:"https://i.pinimg.com/236x/42/25/9b/42259bd5fab66ce6e364562a4d711889.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/1e/05/b2/1e05b2ebc5a40ae0166d653108837f1f.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/8e/8d/53/8e8d53e34ff5b39b6942b1a541bdadbd.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/b9/19/58/b9195882540c7b0f1583d41799fbba1d.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/b3/5e/ef/b35eef7d4a83cacd99af92d910ef2523.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/0b/58/ee/0b58ee62890206589ced8c7203ae97da.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/2b/8e/5f/2b8e5fe6ed23f3a72baae96a352cac2a.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/2f/04/cc/2f04cc25c1f63ba7672a117ad07e0225.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/2c/ec/b3/2cecb32f92e1f7282a74370947b9b48d.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/d3/f7/4f/d3f74fcc9899a13b2278528a23403ac5.jpg"},
{name:"fruits", image:"https://i.pinimg.com/236x/af/61/6c/af616c58b59c722a1ff3a248cdff7e53.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/7e/3d/3b/7e3d3bf04d254d197db00ab30149f291.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/2e/41/8c/2e418c7123034dd903e80aaae9b03735.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/9c/ce/2f/9cce2f14f232697214b0ab2174e0172e.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/03/ec/9f/03ec9f4c66ea25d11e9ddfb9d454a460.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/e5/6a/ff/e56aff9eb311f556254abd729d4af68d.jpg"},
{name:"choclate",image:"https://i.pinimg.com/236x/04/b5/a6/04b5a63a279c414a3cb9b376459601f1.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/79/e9/0c/79e90cb4d29b5a0e8472b3f62b4863fc.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/d5/6a/3a/d56a3a107bfdc92a6dce04fb9fe930c1.jpg"},
{name:"study",image:"https://i.pinimg.com/474x/3c/a7/41/3ca741d0e5de13dff7e1aec1179fb940.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/e4/3b/30/e43b30464e7f8dfd8af62ab84909f436.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/6b/2c/18/6b2c1852d21ce983b7d45649743a6cc7.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/a4/09/7d/a4097dc646a5dfbab697c54cbed32aa7.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/63/61/4f/63614fc8566af01277792ca07f7f1c95.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/64/45/1c/64451c3126150b3c737429f526777628.jpg"},
{name:"study",image:"https://i.pinimg.com/236x/15/a2/98/15a29869369e0a2aa6caab8ce6c6c7cb.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/05/d9/f0/05d9f0b581c93d3e8b478d8ffc88ab07.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/10/ba/c5/10bac54a612422f27104b864b61a99a5.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/d3/02/2d/d3022d79385d6afe22e77f0b9fa9b40b.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/34/bb/f6/34bbf6857121fa31227e3bcc5265b282.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/32/a6/a4/32a6a4527a09106c78188391765592cb.jpg"},
{name:"roses",image:"https://i.pinimg.com/236x/b6/65/fe/b665fea9bddf48588d47eefc4c81ec8f.jpg"},
{name:"flower",image:"https://i.pinimg.com/236x/03/3d/e3/033de3079c5a4d6e9e57e495931449e6.jpg"},
{name:"flowers",image:"https://i.pinimg.com/236x/e3/27/bd/e327bd58eeee655b8103bf72e6c832fc.jpg"},
{name:"flowers",image:"https://i.pinimg.com/236x/61/05/28/61052801a9b33f9e90381d84bad48217.jpg"},
{name:"teady",image:"https://i.pinimg.com/236x/8e/ae/1b/8eae1b6213a222f1bca314801ad600ef.jpg"},
{name:"teady",image:"https://i.pinimg.com/236x/47/85/a0/4785a06f9243a39340aea78d8f839b85.jpg"},
{name:"teady",image:"https://i.pinimg.com/236x/1b/dd/f3/1bddf323ece176c4d8578480da07a20d.jpg"},
{name:"Gifts",image:"https://i.pinimg.com/236x/50/f2/d2/50f2d2fa47bc61645c9d7d036fb881ca.jpg"},
{name:"Gifts",image:"https://i.pinimg.com/236x/2f/18/e7/2f18e7f9a4d2185535989bed0ce68c0f.jpg"},
{name:"Gifts",image:"https://i.pinimg.com/236x/66/6a/1f/666a1fafda7b7acccec933eaaa63117e.jpg"},
{name:"Gifts",image:"https://i.pinimg.com/236x/c5/d3/36/c5d336fcb4cf9b44f8d969e91c9d1217.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/01/5c/d1/015cd1a2012af33b64bdf68583165341.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/bb/b4/70/bbb47046e54ffcdc6a6018e9afe5f9ce.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/a1/ea/13/a1ea13d2a2513f53ecf1971bb9394131.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/29/b8/63/29b863cbeb637acd4f5907f0719767d5.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/3e/a7/39/3ea73989ad420da960dfe41a5c69660c.jpg"},
{name:"butterfly", image:"https://i.pinimg.com/236x/36/8c/a7/368ca77a4ffde60124dad3fe03f6dfd4.jpg"},
];

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
                        <img class="cursor-pointer" src="${obj.image}" alt="image">
                        <div class="caption">lorem ipsum</div>
                    </div>`;
    });
    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    var overlay = document.querySelector(".overlay");
    var searchData = document.querySelector(".searchdata");
    
    input.addEventListener("focus", function(){
        overlay.style.display = "block";
    });

    input.addEventListener("blur", function(){
        overlay.style.display = "none";
    });

    // input
    // .addEventListener("input", function () {
    //     // console.log(input.value);
    //     if (input.value === ''){

    //     }
    // })


    input.addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        var clutter = "";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`;
        });
        searchData.style.display = "block";
        searchData.innerHTML = clutter;
    });
}

handleSearchFunctionality();
showTheCards();
