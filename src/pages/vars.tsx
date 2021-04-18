import  profile from  "css-fabric/_config/_cssfabric.json";

export default function Vars({ isConnected }) {

    console.log(profile);

    return (
        <pre>{JSON.stringify(profile,null,'\r')}</pre>
    )
}