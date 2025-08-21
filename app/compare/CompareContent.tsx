'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface Plan {
  carrier: string;
  name: string;
  dataAllowance: string;
  price: string;
  talkTime: string;
  features: string[];
  networkQuality: string;
  speedThrottling: string;
  esimSupport: boolean;
  mnpSupport: boolean;
  familyDiscount: string;
  roaming: string;
}

const AdDisclosure = () => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
    <h3 className="text-sm font-semibold text-gray-800 mb-2">広告について</h3>
    <p className="text-xs text-gray-600 leading-relaxed">
      本サイトには各通信事業者のアフィリエイトリンクが含まれており、
      ユーザーが当サイト経由でサービスに申し込んだ場合、運営者に紹介料が支払われる場合があります。
      ただし、この紹介料は料金比較や評価に一切影響しておらず、
      客観的で公正な情報提供を心がけています。
    </p>
  </div>
);

export default function CompareContent() {
  const [filteredCategory, setFilteredCategory] = useState<string>('all');

  // 初回マウント時 URL パラメータ適用
  useEffect(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const category = searchParams.get('category');
      if (category && ['all', 'budget', 'medium', 'unlimited'].includes(category)) {
        setFilteredCategory(category);
      }
    } catch {}
  }, []);

  const plans: Plan[] = [
    {
      carrier: 'ahamo',
      name: 'ahamo',
      dataAllowance: '30GB',
      price: '2,970円',
      talkTime: '5分かけ放題込み',
      features: ['5G対応', 'ドコモ品質', '海外ローミング', 'テザリング'],
      networkQuality: '★★★★★',
      speedThrottling: '1Mbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: 'なし',
      roaming: '82カ国無料'
    },
    {
      carrier: 'LINEMO',
      name: 'ベストプランV',
      dataAllowance: '30GB',
      price: '2,970円',
      talkTime: '5分通話込み',
      features: ['5G対応', 'ソフトバンク品質', 'LINE使い放題'],
      networkQuality: '★★★★★',
      speedThrottling: '1Mbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: 'なし',
      roaming: '別途料金'
    },
    {
      carrier: 'LINEMO',
      name: 'ベストプラン（〜10GB）',
      dataAllowance: '〜10GB',
      price: '990円',
      talkTime: '22円/30秒',
      features: ['5G対応', 'LINE使い放題'],
      networkQuality: '★★★★★',
      speedThrottling: '300kbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: 'なし',
      roaming: '別途料金'
    },
    {
      carrier: 'UQ mobile',
      name: 'トクトクプラン2',
      dataAllowance: '〜30GB（段階制）',
      price: '4,048円（割引前）',
      talkTime: '22円/30秒（通話OPあり）',
      features: ['5G対応', '利用量連動割引', '節約モード', '家族/自宅セット割'],
      networkQuality: '★★★★☆',
      speedThrottling: '1Mbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: '条件下で最大割引',
      roaming: '別途料金'
    },
    {
      carrier: 'UQ mobile',
      name: 'コミコミプランバリュー',
      dataAllowance: '35GB',
      price: '3,828円',
      talkTime: '10分無料（超過22円/30秒）',
      features: ['5G対応', '10分通話込み', 'Pontaパス込み', 'サブスクぷらす対象'],
      networkQuality: '★★★★☆',
      speedThrottling: '1Mbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: 'セット割対象',
      roaming: '別途料金'
    },
    {
      carrier: 'Y!mobile',
      name: 'シンプル2 M',
      dataAllowance: '30GB',
      price: '4,015円',
      talkTime: '22円/30秒',
      features: ['5G対応', 'ソフトバンク品質', '家族割引', 'PayPayポイント'],
      networkQuality: '★★★★☆',
      speedThrottling: '1Mbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: '最大1,188円割引',
      roaming: '別途料金'
    },
    {
      carrier: 'Y!mobile',
      name: 'シンプル2 S',
      dataAllowance: '4GB',
      price: '2,365円',
      talkTime: '22円/30秒',
      features: ['5G対応', '家族割引', 'PayPayポイント'],
      networkQuality: '★★★★☆',
      speedThrottling: '300Kbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: '最大1,188円割引',
      roaming: '別途料金'
    },
    {
      carrier: 'povo',
      name: 'povo2.0',
      dataAllowance: 'トッピング制',
      price: '0円（条件あり）',
      talkTime: '22円/30秒',
      features: ['5G対応', 'au品質', 'トッピング自由'],
      networkQuality: '★★★★☆',
      speedThrottling: '128Kbps',
      esimSupport: true,
      mnpSupport: true,
      familyDiscount: 'なし',
      roaming: '別途料金'
    }
  ];

  const categories = [
    { id: 'all', name: '全プラン' },
    { id: 'budget', name: '格安プラン' },
    { id: 'medium', name: '中容量プラン' },
    { id: 'unlimited', name: '大容量プラン' }
  ];

  const filteredPlans = useMemo(() => {
    if (filteredCategory === 'budget') {
  return plans.filter(p => /3GB|4GB|〜10GB|トッピング制/.test(p.dataAllowance) || parseInt(p.price.replace(/[^\d]/g,'')) <= 1200);
    }
    if (filteredCategory === 'medium') {
      return plans.filter(p => /15GB|20GB|30GB/.test(p.dataAllowance) || (parseInt(p.price.replace(/[^\d]/g,'')) > 1200 && parseInt(p.price.replace(/[^\d]/g,'')) <= 4100));
    }
    if (filteredCategory === 'unlimited') {
      return plans.filter(p => /30GB|35GB|100GB|〜30GB/.test(p.dataAllowance) || p.dataAllowance === 'トッピング制');
    }
    return plans;
  }, [filteredCategory, plans]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            格安SIM・携帯プラン比較
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            主要キャリアの格安プランを料金・サービス内容で詳細比較。
            あなたに最適なプランを見つけてください。
          </p>
          <p className="text-xs text-gray-400 mt-2">最終更新: 2025-08-21</p>
        </div>

        <AdDisclosure />

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilteredCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filteredCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">キャリア</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">プラン名</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">データ容量</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">月額料金</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">通話料</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">特徴</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">通信品質</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => {
                  const matched = filteredPlans.includes(plan);
                  return (
                    <tr
                      key={`${plan.carrier}-${plan.name}-${index}`}
                      className={`transition-opacity duration-300 ${matched ? 'hover:bg-gray-50' : 'opacity-30'} ${matched ? '' : 'pointer-events-none'}`}
                      aria-hidden={!matched}
                    >
                      <td className="border border-gray-300 px-4 py-3 font-medium">{plan.carrier}</td>
                      <td className="border border-gray-300 px-4 py-3">{plan.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{plan.dataAllowance}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{plan.price}</td>
                      <td className="border border-gray-300 px-4 py-3">{plan.talkTime}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <ul className="text-sm">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600">• {feature}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">{plan.networkQuality}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

  <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">プラン選びのポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">データ使用量で選ぶ</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 3GB以下: ライトユーザー向け</li>
                <li>• 15-20GB: 一般的な使用量</li>
                <li>• 30GB以上: ヘビーユーザー向け</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">重視するポイント</h3>
              <ul className="text-gray-600 space-y-1">
        <li>• 通信品質重視: ahamo、LINEMO</li>
        <li>• 料金重視: povo、LINEMO ベストプラン（〜10GB）</li>
                <li>• 家族割引: UQ mobile、Y!mobile</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-6">
            <p className="text-xs text-gray-500">一致: <span className="font-semibold">{filteredPlans.length}</span> / 全{plans.length}行（非一致行は淡色表示）</p>
            <p className="text-xs text-gray-500">※価格は税込。キャンペーン/割引・トッピング条件は変動。最新は公式をご確認ください。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
