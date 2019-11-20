<?php

namespace App\Modules\V1\Charity\Services;

use App\Modules\V1\Charity\Repositories\CharityRepository;
use App\Modules\Service as BaseService;
use App\Shared\Traits\Updater;

class CharityService extends BaseService
{
    use Updater;
    /**
     * CharityService constructor.
     * @param CharityRepository $charityRepository
     */
    public function __construct(CharityRepository $charityRepository)
    {
        parent::__construct($charityRepository);
    }

    /**
     * Get All object
     *
     * @param array|null $data data
     *
     * @return \Model\Eloquent\Builder
     */
    public function getAll(array $data = null)
    {
        return $this->repository->getAll();
    }
}
