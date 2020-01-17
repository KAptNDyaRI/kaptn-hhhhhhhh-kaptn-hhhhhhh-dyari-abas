const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('message', message => {
    if (message.content == "#wsha") {
        var x = ["KAPTN",
"kaptn",
"bad",
"qbwlma",
"dast xosh",
"talafzun",
"lakwrdia",
"Galaxy",
"2020",
"kaplakam",
"chamchamal",
"sulaymani",
"maraga",
"ptrol",
"sarchnar",
"vip",
"nafas",
"mirza",
"azal",
"hama",
"kamper",
"3abade",
"heno",
"karkuk",
"kawt",
"wc",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"kaptnm",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
"xomhatm",
"chone",
"0770",
"0750",
"dll",
"mn tom xosh awe",
"mn tom xosh nawe",
"tff be axlaq",
"mu narm",
"bawa zhnm bo bena",
"amawe zhn benm",
"amawe shw bkam",
"mdm",
"mrdm",
"usa",
"etr sardame gawadya",
"mn hatm to nahate",
"kaplakam ba be mkiaj bene gwm xward jare tr dll dare kam",
"kaplakam zoor nashrina",
"ndaغawa",
"bagalta pem nalen kaptn",
"xom hatm lachn",
"shex ale lachk bkan",
"dle dll baxwa",
"zoro",
"authorization",
"system",
"666735825085661224",
"xom akwzhm",
"kaplakam nashrena",
];
        var x2 = ['kaptn',
        "kaptn",
        "bad",
        "qbwlma",
		"dast xosh",
		"talafzun",
		"lakwrdia",
		"Galaxy",
		"2020",
		"kaplakam",
		"chamchamal",
		"sulaymani",
		"maraga",
		"ptrol",
		"sarchnar",
		"vip",
		"nafas",
		"mirza",
        "azal",
        "hama",
        "kamper",
        "3abade",
        "heno",
        "karkuk",
        "kawt",
        "wc",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "kaptn",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",

        "xomhatm",
        "chone",
        "0770",
        "0750",
        "dll",
        "mn tom xosh awe",
        "mn tom xosh nawe",
        "tff be axlaq",
        "mu narm",
        "bawa zhnm bo bena",
        "amawe zhn benm",
        "amawe shw bkam",
        "mdm",
        "mrdm",
		"usa",
		"etr sardame gawadya",
		"mn hatm to nahate",
		"kaplakam ba be mkiaj bene gwm xward jare tr dll dare kam",
		"kaplakam zoor nashrina",
		"ndaغawa",
		"bagalta pem nalen kaptn",
		"xom hatm lachn",
		"shex ale lachk bkan",
		"dle dll baxwa",
		"zoro",
		"authorization",
		"system",
		"666735825085661224",
		"xom akwzhm",
		"kaplakam nashrena",



		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` یه‌که‌م که‌س بنوسێت :  __**${x[x3]}**__
۱٥چرکه‌ت له‌به‌رده‌سه‌ بۆ وه‌ڵام دانه‌وه‌`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: کاته‌که‌ ته‌واو بوو که‌س نه‌یتوانی وه‌ڵامی ڕاست بنوسێت
            وه‌ڵامی ڕاست بریتیه‌ له‌ __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} توانیت وه‌ڵامی ڕاست دابنێیت له‌کاتی دیاری کراو  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == "#kaptn hat atanget hhhhhhhhhhhhhh") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', fkk => {
    if (fkk.content == "#shekrdnawa") {
        var x = ["kaptn",
"hama",
"ahmad",
"nafas",
"alla",
"heno",
"mission",
"aland",
"azal",
"mirza",
"kurdistan",
];
        var x2 = ['k a p t n',
		"h a m a",
        "a h m a d",
		"n a f a s",
		"a l l a",
		"h e n o",
		"m i s s i o n",
		"a l a n d",
		"a z a l",
		"m i r z a",
		"k u r d i s t a n",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`یەکەم کەس وشەکە شی بکاتەوە
 :  __**${x[x3]}**__
١٥ چرکەت لەبەر دەستە بۆ وەڵام دانەوە`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: کاتەکەتەواو بوو کەس نەیتوانی وەڵامی ڕاست بداتەوە 
            وەلامە ڕاستەکە برتییە
 __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} تۆ توانیت وشەکە شی بکەیتەوە لەکاتی دیاریکراوا`);
        })
        })
    }
})


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : kaptn`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : kaptn ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Light Games`,"http://twitch.tv/Light")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// kaptn
