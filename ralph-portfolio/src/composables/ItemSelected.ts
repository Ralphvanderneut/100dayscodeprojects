export function ItemSelected(emit: any){

    const OnItemSelected = (id: number): void =>{
        console.log(id);
        emit("selected",id);
    }

    return { OnItemSelected }
}