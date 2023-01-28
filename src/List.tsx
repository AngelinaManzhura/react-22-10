type Props = {}
export const List = (props: Props) => {
    let data = false
    return (
        <>
            <ul>
                <li>List 1</li>
                <li>List 2</li>
                <li>List 3</li>
            </ul>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'purple' : 'tomato',
                    padding: '15px',
                }}
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                tenetur nisi quae consequatur magni et, fugit, quisquam nam
                aperiam, voluptate adipisci consectetur aspernatur placeat earum
                tempore repellat quia libero odio.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
                tenetur nisi quae consequatur magni et, fugit, quisquam nam
                aperiam, voluptate adipisci consectetur aspernatur placeat earum
                tempore repellat quia libero odio.
            </p>
        </>
    )
}
// export default List
