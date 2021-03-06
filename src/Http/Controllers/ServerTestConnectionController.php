<?php

namespace Deploy\Http\Controllers;

use Deploy\Jobs\TestConnectionJob;
use Deploy\Models\Server;
use Illuminate\Http\JsonResponse;

class ServerTestConnectionController extends Controller
{
    /**
     * Get server connection status.
     */
    public function show(Server $server): JsonResponse
    {
        $this->authorize('view', $server);

        dispatch(new TestConnectionJob($server));

        return response()->json(null, 204);
    }
}
