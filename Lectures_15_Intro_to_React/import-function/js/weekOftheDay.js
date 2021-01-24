// export keyword
export const daysOfTheWeek = ["Sunday","Monday","Tuesday"];

export const monthsArray = ["Jan","Feb","March"];

export function printDaysOfTheWeek() {
    daysOfTheWeek.map((dayOfTheWeek) => {
        console.log(dayOfTheWeek);
    });
}