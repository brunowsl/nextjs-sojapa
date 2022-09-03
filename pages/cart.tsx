import { useRouter } from 'next/router';


export default function Cart() {

    const router = useRouter();

    function toMain() {
        router.push('/');
    }

    return (
        <div>
            <div style={{ paddingLeft: "10px" }}>
                <span className="mdi mdi-arrow-left" style={{ fontSize: "25px", float: "left" }} onClick={toMain} />
            </div>
        </div>
    )
}