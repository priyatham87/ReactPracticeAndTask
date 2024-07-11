
const Heading1=()=>{
    return <h1>PSP</h1>
};
export default Heading1

export const Heading2=()=>{
    return <h2>My Hobbies Are:Playing Cricket</h2>
};

export const Heading3=(prop)=>{
    const {title}=prop
    return <h3>Team Name:{title}</h3>
};

export const Heading4=(prop)=>{
    const {trophy}=prop
    return <h4>No Of Cups:{trophy}</h4>
};

export const Heading5=()=>{
    return <h5>Heading5</h5>
};

