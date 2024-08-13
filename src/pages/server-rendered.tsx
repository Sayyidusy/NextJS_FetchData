import supabase from "../../utils/supabase";

export async function getServerSideProps() {
    new Promise (resolve => {
        setTimeout(() => {
            resolve(true);
        }, 5000)
    })
    const {data, error} = await supabase.from("personal").select();

    return {
        props: {
            data,
        }
    }
}

export default function SSR({data}:{data:any}) {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}