export const fight = () => {
    const resultArray = ['You Won :)', 'A Draw -_-', 'You Lose :('];
    const min = 0;
    const max = 2;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return resultArray[randomNumber];
}