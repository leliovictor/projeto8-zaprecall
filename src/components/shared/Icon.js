export default function Icon ({color, name, onClick}) {
    
    return(
        <ion-icon onClick={onClick} class={color} name={name}></ion-icon>
    );
}