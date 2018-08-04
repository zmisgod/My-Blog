export const getters = {
    title: state => state.title,
    description: state => state.description,
    articleLists: state => state.articleLists,
    nowColumn: state => state.nowColumn,
    articleObject: state => state.articleObject,
    showNextPage: state => state.showNextPage,
    pageSize: state => state.pageSize,
    nowCategory: state => state.nowCategory,
    categoryLists: state => state.categoryLists,
    showSearchFrame: state => state.showSearchFrame,
    searchWord: state => state.searchWord,
    articleLoading: state => state.articleLoading,
    queryString: state => state.queryString,
    paramsString: state => state.paramsString,
    uri: state => state.uri,
    user: state => state.user,
    userMenu: state => state.userMenu,
    codeStatus: state => state.codeStatus,
    customStyle: state => state.customStyle,
    githubRepository: state => state.github_repository,
    requestURI: state => state.requestURI,
    requestParams: state => state.requestParams,
    commentLoading: state => state.commentLoading,
    commentNowPage: state => state.commentNowPage,
    commentLists: state => state.commentLists,
    commentParams: state => state.commentParams,
    commentRes: state => state.commentRes,
    linkLists: state => state.linkLists,
    defaultLinkLists: state => state.defaultLinkLists,
}