export function ItemSelected(emit: any){

    const OnItemSelected = (id: number): void =>{
        emit("selected",id);
    }

    return { OnItemSelected }
}