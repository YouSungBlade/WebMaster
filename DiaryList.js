const DiaryList = ({diaryList}) => {
    return (
        <div className="DiaryList-real">
            {diaryList.map((it)=> (
                <div key={it.id}>
                    <div className="DiaryList">{it.content}</div>
                </div>
            ))}
        </div>
    )
};

export default DiaryList;