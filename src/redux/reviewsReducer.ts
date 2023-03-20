import { createSlice } from '@reduxjs/toolkit'

type Review = {
    name: string
    text: string
}

const initialState: Review[] = [
    {
        name: 'Павло Чернецький',
        text: 'Хороший телефон. Перейшов з XS Max , різницю відразу відчутно. Швидкий , динамічний!',
    },
    {
        name: 'Виталий Куценко',
        text: 'Перейшов с 11. Користуюсь вже тиждень, яскравий якісний дисплей насичені кольори, фото відео помітно кращьоЇ якості, стабілізація відео, швидкість інтерфейсу. Менший розмір при тій же діагоналі дисплею, в руці лежить комфортно.',
    },
    {
        name: 'Поліна Бєляєва',
        text: 'Перейшла з Iphone XS, тому для мене різниця очевидна. Плавні анімації та неймовірна швидкість роботи. Стабілізатор в камері дуже якісний, вже не потрібно окремо докуповувати тримачі-стабілізатори.',
    },
]

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview: (state, action) => [...state, action.payload],
    },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
