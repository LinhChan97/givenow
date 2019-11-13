<?php

namespace App\Shared\Traits;

use Illuminate\Http\JsonResponse;

trait ApiResponser
{
    // define meta to response
    protected $meta = null;
    // define data to response
    protected $data = [];
    // response only data
    protected $dataOnly = false;
    // status to response
    protected $status = JsonResponse::HTTP_OK;
    // error validation
    protected $errors = [];

    /**
     * Return json format
     *
     * @return json
     */
    public function jsonOut()
    {
        if ($this->dataOnly) {
            return response($this->data, $this->status);
        }

        if (!isset($this->meta['message'])) {
            $this->meta['message'] = __('messages.request_success');
        }

        $this->meta['status'] = $this->status;

        # Set data response
        $response = [
            'meta' => $this->meta,
            'data' => $this->data
        ];

        return response($response, $this->status);
    }

    /**
     * Set messages to response
     *
     * @param mixed $messages messages
     * @param array $optional can be input optional params
     *
     * @return ApiResponser
     */
    public function setMeta($messages = "", $optional = [])
    {
        // set message into tag meta
        $this->meta["message"] = $messages;
        // set options data
        if (!empty($optional)) {
            $this->meta = array_merge($this->meta, $optional);
        }

        return $this;
    }

    /**
     * Set data to response
     *
     * @param array $data data of response
     *
     * @return ApiResponser
     */
    public function setData($data)
    {
        $this->data = $data;
        return $this;
    }

    /**
     * Set data only, want to response only data
     *
     * @param boolean $dataOnly response without meta
     *
     * @return ApiResponser
     */
    public function setDataOnly($dataOnly)
    {
        $this->dataOnly = $dataOnly;
        return $this;
    }

    /**
     * Set status to response
     *
     * @param integer $status status of response
     *
     * @return ApiResponser
     */
    public function setStatus($status)
    {
        $this->status = $status;
        return $this;
    }

    /**
     * Set data for paginated
     *
     * @param array $resource Resource data
     *
     * @return ApiResponser;
     */
    public function setDataPaginated(array $resource)
    {
        # Set data response
        $this->setData($resource['data']);
        # delete data in $resource.
        unset($resource['data']);
        # Set pagination to meta data.
        $this->setMeta(__('messages.request_success'), ['pagination' => $resource]);
        return $this;
    }
}
