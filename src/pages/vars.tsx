import  profile from  "css-fabric/_config/_css-fabric-conf.json";

export default function Vars({ isConnected }) {

    console.log(profile);

    return (
        <pre>{JSON.stringify(profile,null,'\t')}</pre>
    )
}