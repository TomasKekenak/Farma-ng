export class Zviera {
    constructor(
        public id: number,
        public registracneCislo: string,
        public druh: string,
        public plemeno: string,
        public pohlavie: string,
        public datumNarodenia: string,
        public datumNadobudnutia: string,
        public fdatumNarodenia: string,
        public fdatumNadobudnutia: string,
        public kupnaCena: number,
        public popis?: string,
    ){ }
}