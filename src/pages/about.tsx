import {useEffect, useState} from 'react';
import supabase from '../../utils/supabase'

export default function About() {
    const [data, setData] = useState<any>(null);
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
         const {data, error} = await supabase.from("personal").select();
         console.log({data, error});
         setloading(false);
         setData (data);
        };

        getData();
    },[]);

    return loading ? (
        <p>Loading ...</p>
    ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}


// client-side => useEffect
// server-rendered => getServerSideProps
// static-generation => getStaticProps
// static-with-revelidation => getStaticProps with revalidate key