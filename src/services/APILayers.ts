import { ApiMockResponse } from "./api";
import { ResEntity } from "../types/Kanban";

const LocalStorageKeyName = "kanban-boards";

export class BoardAPI {
  async fetchBoardList(): Promise<ResEntity[]> {
    const apiData: ResEntity[] = ApiMockResponse;
    let BoardList: ResEntity[] = [];
    // se o localstorage for [] ele vai setar o api como padrão
    if (localStorage.getItem(LocalStorageKeyName)) {
      const localStorageData: ResEntity[] = JSON.parse(
        localStorage.getItem(LocalStorageKeyName) ?? "",
      );
      BoardList = [...localStorageData];
    } else {
      BoardList = [...apiData];
      updateLocalStorageBoards(BoardList);
    }

    return BoardList;
  }
} 

export async function fetchBoardList(): Promise<ResEntity[]> {
  const api = new BoardAPI();
  return api.fetchBoardList();
}
export function updateLocalStorageBoards(boards: ResEntity[]) {
  localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}
