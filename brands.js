const brands = [
    {
        name: 'Nook',
        url: 'https://nookcosmetics.it/wp-content/uploads/2024/01/nook_desk_01.png',
        website: 'https://nookcosmetics.it/?lang=en',
        description:  `Bez neprocjenjivog doprinosa prirode, zapravo, moderna kozmetička znanost ne bi postojala. Tijekom
        posljednjih nekoliko godina Nook je radio na formuliranju nove linije proizvoda i rješenja za terapiju
        ljepote vlasišta i kose. Istraživajući i razvijajući sve bolje i osjetljivije formule, te integrirajući funkcionalne
        biljne tvari i prirodne aktivne tvari u visokokvalitetne sirovine stvoreni su visokokvalitetni proizvodi i tako
        ostvaren izravan kontakt sa samom prirodom. `
    },
    {
        name: 'Nouvelle',
        url: 'https://beautyjanet.com/cdn/shop/files/banner11_copy_3.png?v=1683238093&width=3840',
        website: 'https://nouvellecosmetics.com.au/',
        description: `Stilist koji radi s Nouvelle proizvodima je suvremen profesionalac, uvijek u tijeku s najnovijim
        trendovima, ali i slobodan da ih interpretira na osobni način. Nouvelle je brand koji inspirira frizere
        najnovijom modom i trendovima. Profesionalni proizvodi im pomažu postati referentna točka za široku,
        raznoliku klijentelu i daje im sve instrumente za pružanje kvalitetnih usluga zahvaljujući svojim salonskim
        proizvodima za njegu kose i bojanje kose, koji se kreću od osnovnih do skroz odvažnih tretmana i frizura
        za mlađu publiku.`

    },
    {
        name: 'Oway',
        url: 'https://edenshop.es/img/cms/oway/oway-organic-way.jpg',
        website: 'https://oway.com/',
        description: `Ova poznata talijanska tvornica zdravlja u kratkom se roku pretvorila u ključnog ambasadora zdravog,
        ekološki prihvatljivog načina života. Osim što su proizvodi Owaya organski i njihova ambalaža je ekološki
        prihvatljiva, tube su aluminijske, a boce su staklene i boje jantara, kakve se koriste u farmaciji jer
        osiguravaju trajnost proizvoda i mogu se beskonačno reciklirati. Istančana mješavina eteričnih ulja,
        hidrolata, maslaca i ostalih prirodnih i egzotičnih sastojaka učinila je Oway jedinstvenim i prepoznatljivim
        brendom.`

    },
    {
        name: 'Dikson',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJffJtiQ29EkksTvQ_Xp1QNcWj4BuBK2F-g&usqp=CAU',
        website: 'https://cdn-d03d5231-5b2e278c.mysagestore.com/22a826fb3c20abdb19f17cee1eb78892/contents/ckfinder/images/Sarah-Beauty-KB/Key-brands/dikson-header.jpg',
        description: `Dinamična tvrtka u stalnoj službi frizera više od 50 godina, stalno proučavajući nove tehnologije kako bi
        ponudila tržištu samo najbolje proizvode i usluge. Tvrtka ima sjedište u Italiji, gdje uživa veliko
        povjerenje svojih klijenata, ali posluje i na međunarodnoj razini izvozeći u 70 zemalja svijeta.`

    },
    {
        name: 'Cocochoco',
        url: 'https://frizerland.ba/wp-content/uploads/2020/09/slika-1024x1024.jpg',
        website: 'https://cocochoco.net/',
        description: `Glavna misija je zdravlje kose i upravo zato ovaj brend u ponudi ima najkvalitetnije proizvode za njenu
        njegu. Jedinstvena formula Cocochoco proizvoda bez sulfata, parabena i ostalih štetnih sastojaka, kosu
        čini savršeno mekom, glatkom, svilenkastom, sjajnom i zdravom. Ako vodite svakodnevne borbe s
        teškom, gustom, kovrčavom ili oštećenom kosom, vrijeme je da upoznate keratin - kralj svih tretmana za
        kosu! Tretman nakon kojeg ćete kosu sušiti duplo brže, a pegla za kosu vam više uopće neće trebati!`

    },
    {   name: 'Farmavita',
        url: 'https://tradeforcebrands.com/wp-content/uploads/2022/02/farmavita-logo-TFB.png',
        website: 'https://farmavita.net/',
        description: `Farmavita je talijanska tvrtka koja se nalazi u mjestu Locate Varesino u blizini Milana. Već 30 godina
        djeluje na tržištu kozmetike za kosu s važnim prioritetom: Visokokvalitetni profesionalni proizvodi za
        kosu. Farmavita proizvodi u vlastitom pogonu opremljenom najmodernijim strojevima , a svoje
        proizvode razvija formulacijom u vlastitom laboratoriju za istraživanje i razvoj.`

    },
    {
        name: 'Subtil',
        url: 'https://topstil.com.hr/wp-content/uploads/2017/04/subtil-featured.jpg',
        website: '',
        description: `Subtil boje se proizvode u Francuskoj u gradu Tuluzu, u labaratoriju Ducastel. Glavni sastojak u svim
        Subtil formulama je EPALIN. Epalin je aktivni sastojak derivata dobivenog iz ulja kukuruza. Njega su još u
        davnini koristili Tibetanski svečenici kao ljekovito sredstvo. Njegova najvažnija kvaliteta je da ograničava
        kemijske agresije na kosu i smiruje iritacije vlasišta koje se mogu pojaviti tokom bojenja kose.`

    },
    {
        name: 'Kerastase',
        url: 'https://cdn0.bellaffair.com/upload/image/wide/kerastase-27450.jpg',
        website: 'https://kerastase.com/',
        description: `Kérastase kozmetika kombinira stručno znanje najboljih svjetskih frizera i ekspertizu najprogresivnijih
        znanstvenih timova. Proizvodi za njegu kose brenda Kérastase napravljeni su u skladu s najzahtjevnijim
        kriterijima i potpuno će vas razmaziti jer svakodnevno oblikovanje kose pretvaraju u luksuzni osobni
        užitak. Prepustite se stručnjacima i osjetite nježan dodir pariškog luksuza, revolucionarne njegujuće
        tehnologije i potpuno individualne njege, koja će od vaše kose napraviti umjetničko djelo.`

    },
    {
        name: 'Brow Xenna',
        url: 'https://static.wixstatic.com/media/b547af_d05f5860f17a4d1ca7b07ed71354dca4~mv2.jpg/v1/fill/w_640,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b547af_d05f5860f17a4d1ca7b07ed71354dca4~mv2.jpg',
        website: 'https://browxenna.com/',
        description: `Prirodna kana za obrve Brow Xenna iz Rusije jedan je od najprodavanijih proizvoda za kanu za obrve. Ne
        samo da naglašava boju i volumen vaših obrva, već i jača oslabljene i oštećene dlačice. Omogućuje
        optimalno bojanje obrva i kože uz efekt nježnog trajnog make-upa – bez “crvenkastog” efekta nakon
        završetka tretmana. Prirodni sastojci jačaju dlačice pri svakom ponovnom nanošenju i pomažu vratiti
        prirodan oblik obrva. Pažljivo odabrani sastojci omogućuju postojanost kane na kosi do 6 tjedana.`

    },
];

brands.forEach(brand => {
    // Create a new div for each brand
    const brandDiv = document.createElement('div');
    brandDiv.classList.add('brand-container');

    // Add brand name
    const brandName = document.createElement('h2');
    brandName.textContent = brand.name;
    brandDiv.appendChild(brandName);

   
    // Add brand link
    const brandLink = document.createElement('a');
    brandLink.href = brand.website;
    brandDiv.appendChild(brandLink);


    const brandDescription = document.createElement('p');
    brandDescription.classList.add('brand-description');
    brandDescription.textContent = brand.description;
    brandDiv.appendChild(brandDescription);

     // Add brand logo
     const brandLogo = document.createElement('img');
     brandLogo.src = `${brand.url}`;
     brandLogo.alt = brand.name;
     brandLogo.classList.add('brand-img');
     brandDiv.appendChild(brandLogo);
 

    // Append the brand div to the parent container
    // Replace '.parent-container' with the actual class or id of the parent container
    document.querySelector('.parent-container').appendChild(brandDiv);
});
