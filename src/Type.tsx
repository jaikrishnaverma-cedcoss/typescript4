export type Article={
    id: number, 
    title: string, 
    body: string
}

export type ArticleState={
    articles: Article[ ]
}

export type ArticleAction={
    type: string, 
    article: Article
} 

