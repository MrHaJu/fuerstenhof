<?php

declare(strict_types=1);

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

namespace TYPO3\CMS\FrontendLogin\Event;

use Psr\Http\Message\ServerRequestInterface;

/**
 * A notification if something went wrong while trying to log in a user.
 */
final class LoginErrorOccurredEvent
{
    public function __construct(
        protected ServerRequestInterface $request
    ) {}

    public function getRequest(): ServerRequestInterface
    {
        return $this->request;
    }
}
