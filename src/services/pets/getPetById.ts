import { IPet } from "../../interfaces/pets";
import httpClient from "../api/httpClient";

export async function getPetById(id: string) : Promise<IPet> {
    try {
        const response = await httpClient(`/pet/${id}`)
        return response.data
    } catch (error) {
        console.error('Erro ao buscar por id',error)
        throw error
    }
}