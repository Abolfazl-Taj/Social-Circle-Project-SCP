type personType = {
    id: string,
    Full_Name?: string,
    Brith_Day: string | number,
    Description?: string,
    Status: {
        id: number,
        text: string
    },
    personality: {
        id: number,
        text: string,
        icon: string
    },
    traits?: string[],
    news?: {
        id: number,
        news: string,
        date: string
    }[]
    next?: string[]
}
export default personType;
