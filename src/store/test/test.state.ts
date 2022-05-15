export interface StateTest {
  ids: number[];
  films: { [id: number]: any };
  selected: number;
}
export const initialTestState: StateTest = {
  ids: [1, 2, 3],
  films: {},
  selected: 0,
};
