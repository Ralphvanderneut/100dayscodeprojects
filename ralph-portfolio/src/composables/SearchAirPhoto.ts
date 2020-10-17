
export function AirPhoto() {
    const apiUrl = "https://ckan.dataplatform.nl/api/3/action/datastore_search?resource_id=4d338843-7a46-44a4-bc7d-4770783c754a";

    const Search = async (limit: number, search: string): Promise<object[]>  => {

        const resp = await fetch(`${apiUrl}&limit=${limit}&q=${search}`);
        const res = await resp.json();
        return res.result.records
        
    }

    return {Search}
}