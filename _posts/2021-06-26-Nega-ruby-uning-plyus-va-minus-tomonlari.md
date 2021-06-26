---
layout: post
title: "Nega Ruby? Uning plyus va minus tomonlari haqida"
tags: [ruby, useful, blog]
share-img: "/img/blog/ruby.png"
permalink: nega-ruby-uning-plyus-va-minus-tomonlari/
---

Tez-tez marvaridning (*GEM*) o'limi haqida e'lon qilingan maqolalarni o'qib tursangiz kerak. Biroq Ruby on Rails 15 yoshdan oshgan bo'lsa-da, dasturlash dunyosidan ketishga yaqin emas. Nima uchun hozirgacha Ruby dasturlash tili va Ruby on Rails frameworkdan foydalanilib kelinmoqda kabi savollarga ushbu maqolada javob topa olasiz degan umiddaman!

<!--more-->

<style>
p {
    margin: 0 !important;;
    margin-block-start: 1em !important;
    margin-block-end: 1em !important;
    margin-inline-start: 0;
    margin-inline-end: 0;
}
</style>

Ko'pchilikni xabari bor hozirda o'z dasturchilik faoliyatimni Amerikaning [Gap Intelligence](https://gapintelligence.com) firmasida Ruby developer bo'lib yuritmoqdaman. Bugungi kunda toza Ruby da, va Ruby on Rails (RoR) frameworkining 3 xil versiyasida ishlashga to'g'ri kelyapti va bu orada Ruby haqida ozmi ko'pmi bilimlarimni oshirib kelmoqdaman. Bugun sizlar bilan Ruby ning o'zim bilgan jihatlarini bo'lishmoqchiman.

> "Inson ijodkorlik uchun yaratilgan va men doimo yaratishni yaxshi ko'rishimni bilganman. Afsuski, men rassom yoki musiqachi iste'dodidan mahrum bo'ldim. Lekin dasturlarni qanday yozishni bilaman. Men kompyuter meni boshqarishini emas, kompyuter mening xizmatkorim bo'lishini hohlayman, shuning uchun unga nima qilish kerakligini tez va samarali tushuntira olishim kerak!" - *Yukihiro Matsumoto, Ruby tilini asoschisi*

---

## Ruby va RoR tarixi

Ruby ochiq kodli, obyektga yo'naltirilgan va tarjima qilinadigan (interpretatsiya) dasturlash tili hisoblanib, 1993-yilda yaponiyalik Yukihiro Matsumoto tomonidan ishlab chiqilgan. 1993 yil 24 fevralda Ruby tilining tug'ilgan kuni hisoblanadi, shu kundan boshlab Perl va Python Matsumotoning talablarini qondirmaganidan so'ng u Ruby ustida ish boshlaydi. Ruby ning birinchi ommaviy 0.95 versiyasi 1995-yil 21-dekabrda Yaponiya ichki telekonferensiyasida taqdim etiladi. Keyinchalik, ikki kun ichida Rubyning keyingi uchta versiyasi chiqariladi. Rubyning dastlabki versiyalarida ham Matsumoto alohida ahamiyatga ega bo'lgan imkoniyatlarni yaratgan edi: obyektga yo'naltirilgan dasturlash, meros olishga ega sinflar, iteratorlar, istisnolarni qayta ishlash (exception lar) va hokazolar.

1995-yildan 2002-yilgacha bo'lgan davrda Ruby haqida yigirmaga yaqin kitob chop etiladi. Yaponiyada u Pythondan ko'ra ko'proq mashhur tilga aylanadi. 1997-yilda Ruby dokumentatsiyasi ingliz tilida paydo bo'ldi va 1998-yilda "ruby-talk" forumi ochildi. Biroq, 2004-yilgacha Ruby Yevropada va AQShda keng tarqalmagan edi. Uning qobiliyatlari va ko'plab qo'llab-quvvatlanadigan platformalar tufayli Ruby asta-sekin tomoshabinlar e'tiborini qozona boshladi.

2004-yilda [Ruby on Rails (RoR, yoki oddiygina Rails)](https://en.wikipedia.org/wiki/Ruby_on_Rails) dunyoga keldi, Rails — Rubyda yozilgan va [MVC (Model-View-Controller)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) arxitekturasidagi veb-ilovalarni yaratish uchun ochiq kodli framework. Ushbu framework [Devid Xaynemeyer Xansson](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson) tomonidan [37signals](https://37signals.com/) bilan birgalikda yaratilgan, Rails yadrosini ishlab chiqgan dasturchilar jamoasi va yuzlab open-source dasturchilarning sa'y-harakatlari bilan kengaytirilgan va takomillashtirilgan.

Ruby tarixidagi asosiy voqealar Ruby 1.8.0 ning 2003-yilda chiqarilishi va 2007-yildagi Ruby on Rails ning 2.0 versiyasi edi. Shundan so'ng katta tijorat loyihalari uchun tildan foydalanishga bo'lgan qiziqish sezilarli darajada oshdi. 2006 yilda Ruby [Tiobe reytingida](https://en.wikipedia.org/wiki/TIOBE_index) "Yil dasturlash tili" mukofotini olgan. 2009-yili Ruby 1.9.1 versiyasi va RoR 3.0 versiyasi chiqarilishi bilan esa vaziyat sezilarli darajada o'zgardi: interpretatorning ishlash tezligi bir necha marta oshirildi, .NET va JVM ostida muqobil dasturlar bilan deyarli tenglashdi, tilning modifikatsiyasi tez-tez tanqid qilinadigan daqiqalarni yo'q qildi. TIOBE reytingi va [indeed.com](https://www.indeed.com/) ma'lumotlariga ko'ra 2009-yildan 2012-yilgacha davrda Ruby ga bo'lgan qiziqishlar uch barobar oshgan.

Hozirgi kunga kelib esa Ruby ko'pchilik Linux, MacOS va operatsion tizimlar foydalanuvchilari uchun operatsion tizim bilan birga o'rnatilgan holda keladi. Ruby bilan bog'liq asosiy ilovalardan biri Ruby on Rails bo'lib qolmoqda, u faol rivojlanishda davom etmoqda, ammo Rubydan foydalanish aslida ancha keng — turli maqsadlar uchun ko'plab ilovalarni ishlab chiqadi, shuningdek, ilovalarni avtomatlashtirish va sozlash va administrativ yordam dasturlarini yozish uchun skript tili sifatida ishlatiladi, xususan, Linux operatsion tizimida. Masalan, ko'pchilik iOS dasturchilariga tanish [CocoaPods](https://en.wikipedia.org/wiki/CocoaPods) ham Ruby da yozilgan.

## Filosofiya

Matsumoto, obyektga yo'naltirilgan dasturlash fanati edi, Perldan ko'ra kuchliroq va Pythondan ko'ra ko'proq obyektga yo'naltirilgan dasturlash tilini orzu qilgan. Rubyning asosiy maqsadi - dasturning ishlash vaqtidan ko'ra, dasturni yozishga ketgazilgan vaqt, uning soddaligi va tushunarliligini oshirishdir.

* **Kompyuter uchun emas, inson uchun dasturlash tili**
  
  Birinchi o'ringa, dasturni ishlab chiqishda dasturchining mehnat xarajatlarini minimallashtirishdir. Kompyuter bilan har qanday ish odamlar tomonidan va odamlar uchun amalga oshiriladi, va birinchi navbatda, odamlar sarf-xarajatlari va sa'y-harakatlari haqida g'amxo'rlik qilish kerak.
* **Oddiy, lekin juda oddiy ham emas.**

  Soddalashtirish - bu yaxshi, lekin u o'z-o'zini yo'q qiladigan yoki yakuniy natijaga zarar yetkazadigan ba'zi chegaralarni kesib o'tmasligi kerak.
* **Eng kam "kutilmagan holatlar" prinspi**
  
  Dastur uni yozayotgan dasturchi hohlaganidek ishlashi kerak. Matsumotoning maqsadi kutilmagan holatlarni kamaytirish edi. 
* **Har xil usulda bir xil natijaga erisha olish**
  
  Insonlar har xil va ularga tanlash erkinligini berish muhimdir. Ruby ushbu filosofiyani Perldan olgan, va dasturlash tili mafkurasi bo'yicha dasturchiga bir xil natijaga har xil yo'llar bilan erishish imkoniyatlarini berishni nazarda tutadi.
* **Ishlash tezligiga qul bo'lmaslik**

  Agarda ma'lum bir holat uchun ishlash tezligini kamaytirish lozim bo'lsa uni oldindan loyihalash yoki tuzatishlar orqali optimizatsiya qilish zarur. Ammo samaradorlik juda muhim bo'lmagan holatlarda samaradorlikdan nafislikni afzal ko'rish kerak.
* **Ish vaqtida o'zgartirishlardan qo'rqmaslik**

  Dinamik vositalarning tilda mavjudligi, dastur ishlayotgan vaqtida dasturning o'z-o'zini o'zgartirishiga imkon berishi dasturlashda katta yengillik beradi.
* **Oddiy va qat'iy qoidalarga rioya qilish, lekin ideallikka ergashmaslik**

  Qoidalar va tavsiyalar (xususan, tilda qabul qilingan o'zgaruvchiga nom berish tavsiyalari) dasturni tushunishni osonlashtirish uchun kerak. Agar muayyan holatda qoidadan chetga chiqish mantiqiy va tushunarli bo'lsa, u oqlanadi.
* **Bunga qarshi kurashishning hojati yo'q**

  Ruby qanday ixtiro qilingan bo'lsa shunday holida. Dasturchi o'ziga tanish til kabi Ruby o'zini tutishini kutmasligi lozim. Dasturchi boshqa tillarning ta'siri ostida paydo bo'lgan o'z g'oyalari va odatlariga amal qilishi mumkin, lekin agar taxminlar noto'g'ri bo'lsa, uni qabul qilish va ishlatish kerak.

## RoR afzalliklari
Ruby on Rails quyidagi afzalliklarga ega:
- Keng ekotizim
- RoR MVC
- Mustahkamlik va toza kod
- DRY
- Keng masshtablilik
- Xavfsizlik
- Keshlash
- Vaqt va xarajat samaradorligi
- RAD
- O'z-o'zini hujjatlashtirish
- Test muhiti
- Deploy
- Background jobs
- Front-end (React, Vue, Angular...)

### Keng ekotizim
Ruby on Rails-ni boshqa ko'plab frameworklar bilan solishtirganda aynan uning keng ekotizimi uni mukammal qiladi. RubyGems Ruby jamoasi tomonidan yaratilgan minglab GEM larni: qo'shimchalar, kutubxonalar yoki dasturiy ta'minot qismlari shaklini olish imkonini beradi.

### Ruby on Rails - MVC
MVC - Ruby on Rails infratuzilmasining yana bir muhim qismidir. Bu atama model-view-controller formatini bildiradi. Yondashuv ilovaning ishini uchta kichik tizimga ajratadi, ularning har biri bir qator harakatlar uchun mas'uldir:
- Modellar ma'lumotlar va biznes mantig'ini boshqaradi
- Controller foydalanuvchi interfeysi va ilovani boshqaradi
- View grafik foydalanuvchi interfeysi obyektlarini va taqdimotni boshqaradi

### Mustahkamlik va toza kod
RoR dasturchilari kodning tayyor qismidan (kutubxonalar) foydalanishlari mumkin, bu esa ko'plab funktsiyalarni amalga oshirishni osonlashtiradi. Natijada, dastur kodi toza va yuqori o'qiluvchan bo'ladi. Barcha kelajakdagi yangilanishlar tez va muammosiz amalga oshiriladi, chunki siz o'qish va tartiblash uchun kamroq kodingiz bor. Bu Ruby on Rails da dasturlashning iqtisodiy tomoni uchun muhim xususiyat hisoblanadi.

### DRY
DRY (don't repeat yourself) — Ruby on Rails asoslangan yana bir printsip. Agar takroriy vazifa mavjud bo'lsa, u holda siz bir xil kodni qayta-qayta yozishingiz shart emas.

### Keng masshtablilik
Masshtablilik Ruby on Rails ning yana bir afzalligi hisoblanadi. RoRda qurilgan dastur bir nechta foydalanuvchilar tomonidan yuborilgan minglab so'rovlarni qayta ishlash uchun kengaytirilishi mumkin. Ruby sekundiga 80 000 so'rovlarni bajara oladi.

### Xavfsizlik
RoR xavfsizlik masalalarini xavf ostiga qo'ymaydi. Railsning yana bir afzalliklaridan biri bu xavfsizlikdir. Infrastruktura SQL Injection va XSS hujumlaridan himoyalangan ilovalarni yaratadigan ba'zi xavfsizlikka asoslangan xususiyatlarga ega. Bundan tashqari, boshqa xavfsizlik tahdidlariga qaratilgan ko'plab GEMlarni topishingiz mumkin.

### Keshlash
Ruby on Rails asosiy konfiguratsiyasida to'liq ma'lumot keshlash vositalari mavjud. Proyekt yaratganingizda, ma'lumotlarni keshlashni amalga oshirish imkonini beruvchi vositalar taqdim etiladi. Siz butun sahifalarni yoki kod bloklarini keshlashingiz mumkin. So'rov natijalarini va ActiveRecord modellarini keshlashingiz mumkin. Siz memcached yoki redis va boshqa vositalar yordamida ham ularni kesh vositasi sifatida ko'rsatish orqali keshlashingiz mumkin. Proyektlarda keshlashni amalga oshirish uchun sizdan 95 foiz hollarda tayyor va to'liq yechimlardan boshqa hech narsa talab qilinmaydi.

### Vaqt va xarajat samaradorligi
Vaqt ko'pincha boshlang'ichlar uchun asosiy to'siqdir. Yuqorida sanab o'tilgan barcha funktsiyalar Ruby on Rails-ni vaqt va xarajatlardan tejashga yordam beradi.

### RAD
RAD (Rapid-application development) - RoR ishlatiladigan yana bir soha. Struktura joylashtirishni o'zgartirish jarayonini optimallashtiradi.

### O'z-o'zini hujjatlashtirish
Yuqorida aytib o'tganimizdek, Ruby kodi yaxshi o'qiladi va o'z-o'zini hujjatlaydi (o'z-o'zini ta'riflaydi). Bu dasturlash jarayonini tezlashtiradi, chunki dasturlash jamoasi alohida hujjatlarni yozishga hojat yo'q. Dasturlash jamoasiga yangi kelganlarga kontseptsiyani tushunish va mavjud loyihalarda ishtirok etish bilan bog'liq muammolarga duch kelmasligi kerak.

### Test muhiti (environment)
RoR da uchta standart muhit mavjud: development, production va test. Barcha dasturlash sikli optimallashtiriladi va har bir bosqichda ishlab chiqilgan mahsulotni sinab ko'rishingiz mumkin.

### Deploy
Ruby on Rails muhitida juda qulay instrumentlar mavjud va ular deploy jarayonida ishlatiladigan vositalarni o'z ichiga oladi. Misol uchun, Capistrano-dan foydalanib, ilovaning yangi versiyasini boevoy serverga (yoki bir nechta serverlarga) joylash uchun konsolda bitta buyruqni talab qiladi: ```cap deploy```.

### Background jobs
Orqa fonda ishlovchi protseslar uchun Sidekiq va boshqa instrumentlar mavjud. Ya'ni, asinxron bajariladigan ishlarni bemalol qiyinchiliklarsiz realizatsiya qila olasiz.

### Front-end
Rails 6 dan boshlab Webpacker Rails CLI bilan birga run qilish imkoniyati paydo bo'ldi. Bu degani siz Angular, Vue.js yoki React ni to'g'ridan to'g'ri proyekt ichida yozishingiz va rails bilan birga run qilishingiz mumkin. Bundan tashqari, Webpacker bo'lmagan taqdirda siz view larni ERB, HAML, SLIM, Liquid shablonlar orqali tasvirlashingiz mumkin.  


## RoR kamchiliklari

Ruby on Rails ning ko'plab afzalliklari bor bo'lsa-da, uni ishlatishga qaror qabul qilishdan oldin, uning nima uchun qo'llanilayotgani va u mos keladimi-yo'qmi bilish uchun ko'rib chiqilishi kerak bo'lgan bir nechta kamchiliklar mavjud:

- Ishlash tezligi
- IDE to'liq ishlamasligi
- Yuklanish tezligi
- Hostinglar

### Ishlash tezligi
Ruby on Rails tez ishlaydi, lekin boshqa obyektga asoslangan dasturlash tillarining aksariyati kabi tez emas. Ishlash tezligi tez-tez "Ruby on Rails" ga qarshi asosiy argument deb ataladi. NodeJS yoki GoLang bilan ishlash tezligini solishtirganda Ruby on Rails ortda qolmoqda. Shunga qaramay, masalan Java Spring frameworkini ko'rib chiqsak, RoR g'alaba qozonadi.

### IDE to'liq ishlamasligi
So'nggi yillarda IDE lar funksionalidan to'liq foydalanib o'rganib qolganim sababli, Rails ning ushbu kamchiligi men uchun og'riqlidir. Rails barcha sinflarni birdaniga yukalagani sabab bo'lsa kerak, IDE tavsiyalari unchalik ham to'g'ri bo'lmaydi, ko'p holatlarda kodlar tagiga sariq chiziqlar ko'rinadi (RubyMine ishlataman).

### Yuklanish tezligi
Dasturchilar yuklanish tezligini Ruby on Rails muhitining eng yomon jihatlaridan biri deb atashadi. Foydalanilgan fayllar va GEMlar soniga qarab, platformani ishga tushirish ancha vaqt talab qilishi mumkin. Taxminimcha, buning sababi, RoR ishga tushganda barcha namespace dagi obyektlar qamrab olinadi, bunga sabab RoR da namespace yoki package tushunchasi yo'q hisobi.

### Hostinglar
Barcha sayt hostinglari Ruby on Rails ni qo'llab-quvvatlamaydi. Framework PHP-dan ko'ra ko'proq resurslarni talab qiladi va past darajadagi hosting provayderlari zarur hisoblash quvvatini ta'minlay olmaydi. Biroq, Ruby on Rails ilovalarini qo'llab-quvvatlaydigan ko'plab veb-hosting provayderlarini topishingiz mumkin. Ulardan eng mashhurlaridan biri - [Heroku](https://www.heroku.com/).


## RoR haqida miflarga fikrlarim
### Ruby on Rails bo'yicha dasturchilar yo'q yoki ish yo'q
Dasturchilar bor, shunchaki ular PHP-dasturchilarga qaraganda kamroq. Bu texnologiyani o'zlashtirishga kirish usullaridan kelib chiqadi va odatda ko'pchilik dasturchilar PHPda bir necha yildan keyin Ruby ga o'tadi. Yaxshi dasturchilar esa barcha texnologiyalarda bir xil darajada kam.

Ruby bo'yicha ish topilmaydi deydiganlarga esa LinkedIn da test qilib ko'rishlarini so'rardim, bugungi 26/06/2021 sanasi bo'yicha LinkedIn da quyidagicha natijalarni topdim:
- Ruby On Rails tegi bo'yicha vakansiyalar soni - 8,000+
- Django tegi bo'yicha - 7,000+
- Laravel tegi bo'yicha - 1,000+
- Symfony tegi bo'yicha - 513

### Ruby on Rails bo'yicha dasturchilar juda qimmat
Yuqori darajadagi dasturchilar haqiqatda juda qimmat turishadi va ular har qanday dasturlash tillarida va platformalarda teng darajada qimmat. RoR jamiyatida pastroq darajadagi dasturchilar kamligi tufayli arzon dasturchilar yo'q (albatta, istisnosiz emas). Bunga sabab odatda ular boshqa tillarda ishlab keyinchalik Ruby ga o'tishlaridir. (bu faqat mening fikrim emas, ko'pchilik Ruby dasturchilar oldin PHP da ishlagani yoziladi)

### Rails proyektlar kattalashmaydi
Bu RoR da katta proyekt yozib ko'rmagan insonlarning anglashilmovchiligidan boshqa narsa emas. RoR da ham katta miqyosda proyektlar qilish mumkin. Masalan, GitHub, Groupon, Basecamp va boshqalarga qarang, ularning hammasi Rails da yozilgan. (bu PHP da katta proyekt qilib bo'lmaydi deydiganlarga ham tegishli)

### Rails o'smaydi, contributor lar kam
Bugungi, 26/06/2021 sana bo'yicha TOP frameworklar contributorlari soni:
- Rails - 4,277
- Laravel - 2,559
- Symfony - 2,373
- Django - 2,062
- Yii2 - 1,137
- Spring Boot - 818


## Ruby va RoR ning ayrim qirralari

- Yuqorida ta'kidlanganimdek, Ruby obyekt yo'naltirilgan dasturlash tilidir. "Har bir narsa obyekt" iborasi bu tilda boshqa tillardan farqli o'laroq primitiv narsalarga ham qo'llaniladi. Barcha hisob-kitoblar obyektlarda chaqiriladigan metodlar yordamida amalga oshiriladi. Masalan, ```5 + 4``` qiymatini hisoblash uchun, ```Integer``` sinfining (class) ```5``` ekzemplyar obyektidagi ```+``` metodiga ```4``` obyekti jo'natiladi.
- Ruby dinamik tipizatsiyaga asoslangan, xuddi Python, Perl va PHP kabi.
- Quyidagicha bir qatorning o'zida qiymatlarni bir necha o'zgaruvchiga belgilashingiz mumkin: ```x, y, z = 1, 2, 3```. Natijada esa: ```x = 1, y = 2, z = 3```
- Ikkita ```X``` va ```Y``` o'zgaruvchining qiymatlarini almashtirish uchun ko'pincha ```X``` qiymatini vaqtincha saqlanishi kerak bo'lganda uchinchi o'zgaruvchi ```Z``` ishlatiladi. Ruby-da siz buni osonroq qilishingiz mumkin:
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
x, y = 1, 2
x, y = y, x
</pre>
  Natija: x = 2, y = 1
- Agar uzunlik noma'lum bo'lsa, qatorning oxirgi elementini qanday olish mumkin? ```array[array.length-1]```? Va undan oldingisinichi? ```array[array.length-2]```? Ruby yaxshi yechim bor!
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
arr = [1, 2, 3, 4]
arr[-1] #=> 4
</pre>
- Ruby bilan birga IRB (interactive Ruby) o'rnatiladi, bu siz yozgan har qanday Ruby kodining natijasini konsolda ko'rsatadi. O'z terminalingizda ```irb``` komandasini yozsangiz quyidagicha oyna paydo bo'ladi: ```irb(main):001:0>```. Ushbu konsolda Ruby kod orqali to'g'ridan to'g'ri kod yozib tekshirib ko'rishingiz mumkin. Masalan, 3 ning kvadratini hisoblab ko'ramiz:
<pre class="EnlighterJSRAW" data-enlighter-language="bash">
irb(main):005:0> 3**2 
=> 9
</pre>
- Ruby da o'zgaruvchilarni e'lon qilishning turli usullari mavjud, masalan, ```string``` lar:
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
a = "\nNega Ruby?\n"
a = %Q{\nNega Ruby?\n}
a = %{\nNega Ruby?\n}
a = %/\nNega Ruby?\n/
a = <<-BLOCK
Nega Ruby?
BLOCK
</pre>
- Rubyda ```false``` va ```nil```dan boshqa barcha qiymatlarning ```boolean``` ga transformatsiyasi, ya'ni ularni ```if``` ichida ishlatish ```true``` qiymat beradi.
- Ruby ixtiyoriy konstruksiyasi qandaydir qiymat qaytaradi, masalan:
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
puts( if 5 > 3 then "Katta" else "Kichik" end )   #=> Katta
puts( var = 13 )                                  #=> 13
def test
end
puts(test)                                        #=> nil
</pre>
- ```each``` iteratoridan tashqari boshqa tillarda uchramaydigan ```times``` va ```upto``` iteratorlari ham mavjud:
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
5.times do |i|
  puts "Nega Ruby?\n"
end 
0.upto(5) do |i|
  puts "Nega Ruby?\n"
end
</pre>
- Rubyda katta matematik sonlar uchun ```Bignum```, ```Rational``` va ```Complex``` tiplarining mavjudligi.
- ```!```, ```?```, ```$``` kabi belgilar alohida ahamiyat kasb etadi, masalan, ```!``` belgisi destruktiv metod hisoblanadi, ya'ni, murojaat qilingan obyektni o'zgartirish uchun xizmat qiladi. ```?``` belgisi esa predikatni bildiradi, ya'ni, mantiqiy qiymat qaytaradi. ```$``` belgisi esa global o'zgaruvchi, konstanta yoki sistema o'zgaruvchilarini bildiradi. O'zgaruvchi oldidan bitta ```@``` ekzemplar o'zgaruvchisini bildiradi, ikkita ```@@``` esa sinf o'zgaruvchisini bildiradi.
- Mantiqiy amallar xar xil tip uchun boshqacha ishlaydi, masalan, massivlar uchun ```&``` amali ikkisida ham bor elementlarni oladi. Masalan:
<pre class="EnlighterJSRAW" data-enlighter-language="ruby">
a = [1, 2, 3]
b = [2, 3, 4]
puts a & b          #=> [2, 3]
puts a | b          #=> [1, 2, 3, 4]
</pre>
- ro'yxatni ko'p davom ettirishim mumkin, Ruby ni boshqa tillar bilan solishtiradigan tomoni juda ham ko'p, lekin shunga yarasha bir xil tomonlari ham ko'p, sababi, Ruby da bir xil natijaga har xil usul bilan yetishish mumkin.

## Xulosa

Ko'pincha odamlarning mish-mishlari bir yoki bir nechta mahsulotni o'limga hukm qiladi. Agar bunday bo'lmasa, mish-mishlar sabr-toqat bilan kutib turadi va agar bir kun kelib o'sha yoki boshqa proyekt yopiladigan bo'lsa, kimdir albatta "biz bilgandik, biz kutgandik" qabilidagi gaplarni aytishi aniq. Masalan, xatto PHP tilini ham necha yil bo'ldiki ketma-ket o'limini bashorat qilmoqda, lekin o'ladiganga o'xshamaydi. Qaytaga yaqinda qaytadan faol rivojlana boshladi.

Ruby o'lgan deb aytadigan har bir kishi ingliz tili bilmaydi yoki ingliz tilidagi communitylarni juda kam o'qiydi deb o'ylayman. Bundan tashqari, shaxsiy kuzatishlarimdan, ko'pincha texnologiya rivojlanishni to'xtatganda o'ladi va ular tajriba qilishni to'xtatadilar. Lekin bu holatda ham katta proyektlari bo'lgan kompaniyalar o'z proyektini qayta yozib chiqishni hohlamasa ushbu texnologiya rivojlanishini ushlab turishga harakat qiladi deb o'ylayman.

Ruby tili o'rganish uchun ham qulay til deb hisoblay boshladim, sababi, undagi narijaga har xil usulda borish mumkinligi boshlang'ich dasturchilarga qo'l keladi. Rails frameworki esa xuddi PHP ning boshqa frameworklari kabidir (balki ulardan ozgina mukammalroq ham), o'rganish uchun unchalik qiyinchilik tug'dirmaydi.

Xullas, xulosa o'rnida aytishim mumkinki Ruby qo'rqinchli dasturlash tili emas, tarqatilayotgan dizinformatsiyalar kabi yaqin ora tugab ketadigan ham emas, hozirgi kunda o'z o'rniga, o'z jamoasi va community siga, o'z gigant mijozlariga ega dasturlash tili. Ruby on Rails esa boshqa frameworklardan qolishmaydigan, o'ziga yetarli kutubxona, instrument va funksionallarga ega frameworkdir. O'z faoliyatimdan kelib chiqib agarda qiziquvchilar bo'lsa o'rganishni tavsiya beraman.

As Johnny Cash sings, "Rock & Roll Ruby"!


---