class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.slice(dirtyFileName.indexOf('_') + 1).split('.').filter((ele, i) => i < 2).join('.')
    }
}