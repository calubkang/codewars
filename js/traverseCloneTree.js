var getTargetCopy = function (original, cloned, target) {
  var dfs = function (ori, clo, tar) {
    if (!ori) {
      return null
    } else if (ori == tar) {
      return clo
    }

    var temp = dfs(ori.left, clo.left, tar);
    if (temp) {
      return temp
    }
    return dfs(ori.right, clo.right, tar)
  }
  return dfs(original, cloned, target)
};