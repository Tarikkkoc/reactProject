import { useState, useEffect } from "react"; 
// temel amaç bu fonksiyonu oluşturup diğer complarda istenilen durumda kullanabilmek.

const useFetch = (url) => { // data adresi yerine url parametresini kullanırız. home.jsde adres olarak tanımlı
    const [data, setData] = useState(null); // içeriğini null olarak gösterdik.
    const[isLoading, setIsLoading] = useState(true) // başlangıç için true'ya eşitledik.
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController(); // abortController bir iptal etme denetleyicisidir.

        setTimeout(()=>{
         fetch(url, {signal: abortCont.signal}) // url parametresi
         .then(res => { // datayı almak için response oluşturulur.
             console.log(res); // consoleda ok değeri true. ok değeri hatalı bir gönderim olursa false olur(10.satırda blogss1 olduğunu varsay)
             if(!res.ok){
                 throw Error("Datadan veri getirilmedi. Hata var"); // console'a yazar. 
             };
             return res.json();
             // return "tarik"; // console.log(data) yaplılınca bu fonskiyounun returnlendiği nesne kastedilir. 16.satır için log
             // res dönüyor. dönen res'i javascript nesnesine dönüyor.
         })
         .then(data => { // dataları sağlarız
             // console.log(data);
             setData(data);
             setIsLoading(false); // datalar alındıkran sonra değeri false'a çevirir.
             setError(null);
         })
         .catch(err => { // ağ hatası yakalandığında
             // console.log(err.message);  // hata mesajı loglar.
            if(err.name==='AbortError'){
                console.log("fetch aborted"); // hata AbortError ise (beklediğimiz hata). 
            }
            else{
                setIsLoading(false);
                setError(err.message); // throw error içeriği depolar.
            }
         })
        },1000)
     return () => abortCont.abort();

     }, [url]) // url değiştiğinde useeffect çalışır.   
     return {data, isLoading, error}; // 3 değeri diğer complarda kullanabilmek için döndürürüz.
}

export default useFetch;