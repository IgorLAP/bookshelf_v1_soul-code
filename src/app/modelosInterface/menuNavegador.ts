export interface MenuNavegador {
  linkMenu:string;
  labelMenu: string;
  hab: boolean;
  subMenu?: [{ linkMenu: string, labelMenu: string}]
  showMenu?: boolean
}
