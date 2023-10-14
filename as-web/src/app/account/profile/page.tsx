'use client';

import React from 'react'
import { useAccountService } from '../../_services/useAccountService';

type Props = {}

export default function Profile({}: Props) {
  const accountService = useAccountService();

  accountService.getMobileActive();

  return (
    <div>Profile</div>
  )
}