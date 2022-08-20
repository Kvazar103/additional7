// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
console.log("// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.\n" +
    "// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів")
let exampleObject={
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}
function ForObject(id,name,username,email,street,suite,zipcode,geoLat,geoLng,phone,website,companyName,companyCatchPhrase,companyBs){
    this.id=id;
    this.name=name;
    this.username=username;
    this.email=email;
    this.address={street:street,suite:suite,zipcode:zipcode,geo:{lat: geoLat,lng: geoLng}};
    this.phone=phone;
    this.website=website;
    this.company={name:companyName,catchPhrase: companyCatchPhrase,bs:companyBs}
}
console.log(exampleObject)
let x=new ForObject(2,'vasya','pupkin','pupking@gmail.com','naPupkina8','Apt 8','2131313',
    '-10332.322','123312313.223','12323123123123','pupkin.com','PupkinCompany',
    'Vaysa Pupkin Krasava','Vasya Pupkin')
console.log(x)

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
console.log("// -  Створити функцію конструктор / клас  який описує об'єкт тегу\n" + "// Поля :\n" + "//    " +
    " -назва тегу ()\n" + "// - опис його дій\n" + "// - масив з атрибутами (2-3 атрибути максимум)\n" + 
    "// Кожен атрибут описати як окремий який буде містити\n" + "// -назву атрибуту\n" + "// -опис дії атрибуту\n" + 
    "// інформацію брати з htmlbook.ru\n" + "//\n" + "// Таким чином описати теги\n" + "// -a\n" + "// -div\n" + 
    "// -h1\n" + "// -span\n" + "// -input\n" + "// -form\n" + "// -option\n" + "// -select")

function ChooseTag(el){
    if(el==='a'){
        let x={
            titleOfTag:'a',
            action:`HTML-элемент <a> определяет гиперссылку для перехода на определённое место на странице или на другую страницу в Интернете.`,
            attrs:[{titleOfAttr:'href',actionOfAttr:'Атрибут href указывает ссылку: либо URL, либо якорь. ' + 
                    'Якорь — это название после символа #, который указывает на элемент (ID (en-US)) на текущей странице. ' }]
        }
        return x
    }
    if(el==='div'){
        let x={
            titleOfTag: 'div',
            action: `(<div>) является универсальным контейнером для потокового контента.`,
            attrs:[{titleOfAttr: 'class',actionOfAttr: 'Это список разделённых пробелами классов элемента.'}]
        }
        return x
    }
    if(el==='h1'){
        let x={
            titleOfTag:'h1',
            action:`HTML-элементы <h1>–<h6> представляют собой 6 уровней заголовков секций. 
                  <h1> это наибольший заголовок и<h6> - наименьший`,
            attrs:[{titleOfAttr:'id',actionOfAttr:'id устанавливает элементу уникальный идентификатор (ID), ' +
                    'имя которого должно быть уникальным в документе (на странице)'}]
        }
        return x
    }
    if(el==='span'){
        let x={
            titleOfTag:'span',
            action:`HTML-элемент <span> является основным строковым контейнером для фразового контента, который, 
             по существу, ничего не представляет.`,
            attrs:[{titleOfAttr:'class',actionOfAttr:'Это список разделённых пробелами классов элемента.'}]
        }
        return x
    }
    if(el==='input'){
        let x={
            titleOfTag:'input',
            action:`Элемент HTML <input> используется для создания интерактивных элементов управления 
             в веб-формах для получения данных от пользователя`,
            attrs:[{titleOfAttr:'checkbox',actionOfAttr:'Флажок («чекбокс»). Следует использовать атрибут ' +
                    'value для определения значения, которое будет отдано этим элементом.'}]
        }
        return x
    }
    if(el==='form'){
        let x={
            titleOfTag:'form',
            action:`Элемент HTML form (<form>) представляет (собой) раздел документа, содержащий интерактивные 
             элементы управления, которые позволяют пользователю отправлять информацию на веб-сервер.`,
            attrs:[{titleOfAttr:'action',actionOfAttr:'URI-адрес программы, которая обрабатывает ' +
                    'информацию переданную через форму'}]
        }
        return x
    }
    if(el==='option'){
        let x={
            titleOfTag:'option',
            action:'HTML-элемент <option> используется для определения пункта списка контейнера <select>, ' +
                'элемента <optgroup>, или элемента <datalist>. ',
            attrs:[{titleOfAttr:'label',actionOfAttr:'Этот атрибут - текст ярлыка, отображающий значение(смысл, описание) опции'}]
        }
        return x
    }
    if(el==='select'){
        let x={
            titleOfTag:'select',
            action:`HTML тэг <select> представляет собой элемент управления который содержит меню опций`,
            attrs:[{titleOfAttr:'disabled',actionOfAttr:'Этот логический атрибут указывает что пользователь не может ' +
                    'взаимодействовать с элементом управления'}]
        }
        return x
    }
}

console.log(ChooseTag('div'));

