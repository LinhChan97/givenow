import Request from '../Request';
import AuthHelper from '../../helpers/AuthHelperBackEnd';
const API_URL='/api/v1';

export default class {
    static getAll() {
        const url=`${API_URL}/charities?filters[]=status,0&sort=end_date,desc`;
        return Request.get(url,AuthHelper.setHeaderToken());
    };

    static create(formData) {
        const url=`${API_URL}/charities`;
        return Request.post(url,formData,AuthHelper.setHeaderToken());
    };

    static update(id,formData) {
        const url=`${API_URL}/charities/${id}`;
        return Request.put(url,formData,AuthHelper.setHeaderToken());
    };

    static showByID(id) {
        const url=`${API_URL}/charities/${id}`;
        return Request.get(url,AuthHelper.setHeaderToken());
    };

    static deleteByID(id) {
        const url=`${API_URL}/charities/${id}`;
        return Request.delete(url,AuthHelper.setHeaderToken());
    };
}
