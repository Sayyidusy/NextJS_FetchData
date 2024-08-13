import {useEffect, useState} from 'react';
import supabase from '../../utils/supabase'

export default function About() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const getData = async () => {
         const {data, error} = await supabase.from("personal").select();
         console.log({data, error});
         
         setData (data);
        };

        getData();
    },[]);

    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}
