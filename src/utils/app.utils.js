import _ from "lodash";

export const returnPaginationRange = (totalPage, page, limit, siblings) => {
  let totalPageNoInArray = 7 + siblings;
  if (totalPageNoInArray >= totalPage) {
    console.log("i am here on control");
    return _.range(1, totalPage + 1);
  }

  console.log("i am here in control");
  console.log(page, siblings, totalPage, "here are we");
  let leftSiblingsIndex = Math.max(page - siblings, 1);
  let rightSiblingIndex = Math.min(page + siblings, totalPage);
  console.log(
    leftSiblingsIndex,
    rightSiblingIndex,
    "left and right sibling indexs"
  );
  let showLeftDots = leftSiblingsIndex > 2;
  let showRightDots = rightSiblingIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    let leftItemsCount = 3 + 2 * siblings;
    let leftRange = _.range(1, leftItemsCount + 1);
    console.log(leftRange);
    return [...leftRange, "...", totalPage];
  } else if (showLeftDots && !showRightDots) {
    let rightItemsCount = 3 + 2 * siblings;
    let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, "...", ...rightRange];
  } else {
    let middleRange = _.range(leftSiblingsIndex, rightSiblingIndex + 1);
    return [1, "...", ...middleRange, "...", totalPage];
  }
};
