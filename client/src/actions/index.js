export const HandleForm01Next = (user) => {
    console.log("You clicked on user: ", user);
    return {
        type: 'FORM01_SUBMITTED',
        payload: user
    }
};

export const HandleForm02Next = (user) => {
    console.log("You clicked on user: ", user);
    return {
        type: 'FORM02_SUBMITTED',
        payload: user
    }
};
