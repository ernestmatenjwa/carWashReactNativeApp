import _ from "lodash";

export const contains = ({ name, Desc, location } , query) => {
  const locationName = name.toLowerCase();
  const locationDesc = Desc.toLowerCase();
  const locationAddr = location.toLowerCase();
 
  if (locationName.includes(query) || locationDesc.includes(query) || locationAddr.includes(query)) {
    return true;
  }
  return false;
};
export const getCarWashes = (list,limit = 5, query = "") => {
  return new Promise((resolve, reject) => {
    if (query.length === 0) {
      resolve(_.take(list, limit));
    } else {
      const formattedQuery = query.toLowerCase();
      const results = _.filter(list, _carwash => {
        return contains(_carwash, formattedQuery);
      });
      resolve(_.take(results, limit));
    }
  });
};
export default getCarWashes;
