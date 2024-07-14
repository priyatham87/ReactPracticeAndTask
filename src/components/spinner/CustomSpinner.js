import{DNA} from "react-loader-spinner"

const Spinner=()=>{
    return(<DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
    )
}
export default Spinner;

export const Audio=(prop)=>{
    const {color="orange"}=prop
    return(<Audio
        height="100"
        width="100"
        color={color}
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        />)
}